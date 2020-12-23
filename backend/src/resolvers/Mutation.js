const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    // 1. Check if there is a user with that email
    const user = await ctx.db.query.user({
      where: { email }
    });
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    // 2. Check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error(`Incorrect password for ${email}`);
    }
    // 3. Generate the JWT
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
    // 4. Set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    })
    // 5. Return the user
    return user;
  }
};

module.exports = Mutations;