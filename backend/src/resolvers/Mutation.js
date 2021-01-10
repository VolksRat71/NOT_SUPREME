const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { transport, makeANiceEmail } = require('../mail');
const { hasPermission } = require('../utils');
const stripe = require('../stripe');

const Mutations = {
  async createItem(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You must be logged in to post items!')
    };

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          // Create relationship to user
          user: {
            connect: {
              id: ctx.request.userId
            }
          },
          ...args,
        },
      },
      info
    );
    console.log(item);

    return item;
  },

  updateItem(parent, args, ctx, info) {
    // first take a copy of the updates;
    const updates = { ...args };
    // remove the ID from the updates;
    delete updates.id;
    // run the update method
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      info
    );
  },

  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    //  Find Item
    const item = await ctx.db.query.item({ where }, `{id, title, user {id}}`);
    // Check if they own that item, or have the permissions
    const ownsItem = item.user.id === ctx.request.userId;
    const hasPermissions = ctx.request.user.permissions.some(permission => ['ADMIN', 'ITEMDELETE'].includes(permission));
    if (!ownsItem && !hasPermissions) {
      throw new Error('You do not have permission to do that!')
    }
    // Delete it
    return ctx.db.mutation.deleteItem({ where }, info)
  },

  async signUp(parent, args, ctx, info) {
    // * Default all emails to lowercase, please.
    args.email = args.email.toLowerCase();
    // ! Hash their password.
    const password = await bcrypt.hash(args.password, 10);
    // Create the User in DB
    const user = await ctx.db.mutation.createUser({
      data: {
        ...args,
        password,
        permissions: { set: ['USER'] }
      }
    }, info);
    // Create JWT
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // Set JWT as cookie
    ctx.response.cookie('token', token, {
      Domain: process.env.NODE_ENV == 'dev' ? 'http://localhost:7777' : process.env.APP_DOMAIN,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,// 1 year cookie
      Secure: true,
      SameSite: "Lax",
    })
    return user;
  },

  async signIn(parent, { email, password }, ctx, info) {
    // Check if there is a user with that email
    const user = await ctx.db.query.user({
      where: { email }
    });
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    // Check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error(`Incorrect password for ${email}`);
    }
    // Generate the JWT
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

    console.log(`App domain ${process.env.APP_DOMAIN}`)
    console.log(`Node env ${process.env.NODE_ENV}`)
    // Set the cookie with the token
    ctx.response.cookie('token', token, {
      Domain: process.env.NODE_ENV == 'dev' ? 'http://localhost:7777' : process.env.APP_DOMAIN,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,// 1 year cookie
      Secure: true,
      SameSite: "None",
    });
    // Return the user
    return user;
  },

  signOut(parent, args, ctx, info) {
    ctx.response.clearCookie('token')
    return { message: 'Goodbye 👋' };
  },

  async requestReset(parent, args, ctx, info) {
    // Check if this is a real user
    const user = await ctx.db.query.user({
      where: { email: args.email }
    });
    if (!user) {
      throw new Error(`No such user found for email ${args.email}`);
    }
    // Set a reset token and expiry on that user
    const randomBytesPromisified = promisify(randomBytes)
    const resetToken = (await randomBytesPromisified(20)).toString('hex');
    const resetTokenExpiry = Date.now() + (1000 * 60 * 60); // 1 hour from now
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });
    // Email them that reset reset token
    const mailRes = await transport.sendMail({
      from: 'nathanieljryan1994@gmail.com',
      to: user.email,
      subject: 'Password Reset',
      html: makeANiceEmail(`Here is the password reset link that you requested!
      <br>
      <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">
        Click here to reset!
      </a>`)
    })

    return { message: 'password reset!' }
  },

  async resetPassword(parent, args, ctx, info) {
    // Check if password match
    if (args.password !== args.confirmPassword) {
      throw new Error('Passwords do not match!')
    }

    // Check if its expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - (1000 * 60 * 60)
      }
    });
    if (!user) {
      throw new Error('Reset is either invalid or expired.');
    }
    // Hash new password
    const password = await bcrypt.hash(args.password, 10);
    // Save new password, reset old toke fields
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null
      }
    })
    // generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    // set JTW to toke cookie
    ctx.response.cookie('token', token, {
      Domain: process.env.NODE_ENV == 'dev' ? 'http://localhost:7777' : process.env.APP_DOMAIN,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,// 1 year cookie
      Secure: true,
      SameSite: "Lax",
    })
    // return user
    return updatedUser;
  },

  async updatePermissions(parent, args, ctx, info) {
    // Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in.')
    }
    // Query current user
    const currentUser = await ctx.db.query.user({
      where: {
        id: ctx.request.userId
      }
    }, info)
    // Check if they have permission to make changes
    hasPermission(currentUser, ['ADMIN', 'PERMISSIONUPDATE'])

    // Update Permissions
    return ctx.db.mutation.updateUser({
      data: {
        permissions: {
          set: args.permissions
        }
      },
      where: {
        id: args.userId
      }
    }, info)
  },

  async addToCart(parent, args, ctx, info) {
    // Make sure user is signed in
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error('You must be signed in to add to Cart.')
    }
    // Query the users current cart
    const [existingCartItem] = await ctx.db.query.cartItems({
      where: {
        user: { id: userId },
        item: { id: args.id },
      }
    });

    // Check if item is already in cart inc by 1 if it is
    if (existingCartItem) {
      console.log('This item is already in their cart');
      return ctx.db.mutation.updateCartItem({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + 1 }
      }, info)
    }
    // Check if item is already in cart create new if not
    return ctx.db.mutation.createCartItem({
      data: {
        user: {
          connect: { id: userId }
        },
        item: {
          connect: { id: args.id }
        }
      }
    }, info)
  },

  async removeFromCart(parent, args, ctx, info) {
    // Find cart item
    const cartItem = await ctx.db.query.cartItem({
      where: {
        id: args.id,
      },
    }, `{id, user {id}}`)

    if (!cartItem) throw new Error('No CartItem !ound!')
    // make sure they own that cart item
    if (cartItem.user.id !== ctx.request.userId) {
      throw new Error('Cheatin\', huh?')
    }
    // delete that cart item
    return ctx.db.mutation.deleteCartItem({
      where: { id: args.id },
    }, info)
  },

  async createOrder(parent, args, ctx, info) {
    // Query user and make sure they are signed in
    const { userId } = ctx.request;
    if (!userId) throw new Error('You must be signed in to complete this order!');
    const user = await ctx.db.query.user({
      where: { id: userId }
    },
      ` {
          id
          name
          email
          cart {
            id
            quantity
            item {
              title
              price
              id
              description
              image
              largeImage
            }
          }
        }`)
    // Recalculate the total for the price
    const amount = user.cart.reduce((tally, cartItem) => tally + cartItem.item.price * cartItem.quantity, 0)
    console.log(`Charging client ${amount}, price calculated independent of client side.`)
    // Create Strip charge (decode token into $$$)
    const charge = await stripe.charges.create({
      amount,
      currency: 'USD',
      source: args.token,
    });
    // Convert the CartItem to OrderItems
    const orderItems = user.cart.map(cartItem => {
      const orderItem = {
        ...cartItem.item,
        quantity: cartItem.quantity,
        user: { connect: { id: userId } },
      };
      delete orderItem.id;
      return orderItem;
    })
    // Create order
    const order = await ctx.db.mutation.createOrder({
      data: {
        total: charge.amount,
        charge: charge.id,
        items: { create: orderItems },
        user: { connect: { id: userId } }
      }
    });
    // Clean up - clear users cart
    const cartItemIds = user.cart.map(cartItem => cartItem.id);
    await ctx.db.mutation.deleteManyCartItems({
      where: {
        id_in: cartItemIds
      }
    })
    // Return order to client
    return order;
  }
};

module.exports = Mutations;