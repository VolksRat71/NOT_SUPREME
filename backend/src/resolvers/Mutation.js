const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');
const { transport, makeANiceEmail } = require('../mail');

const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const item = await ctx.db.mutation.createItem(
      {
        data: {
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
    const item = await ctx.db.query.item({ where }, `{id, title}`);
    // TODO: Check if they own that item, or have the permissions
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
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
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
    // Set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    })
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
      from: 'Customer_Support@NotSupreme.store',
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
    //TODO: Check if token is legit

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
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
    })
    // return user
    return updatedUser;
  }
};

module.exports = Mutations;