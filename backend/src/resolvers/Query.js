const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me(parent, args, ctx, info) {
    // Check if current userID is present
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user({
      where: {
        id: ctx.request.userId
      }
    }, info);
  },

  async users(parent, args, ctx, info) {
    // Check if logged in
    if (!ctx.request.userId) {
      throw new Error('You must be logged in.')
    }
    // Check if user has permissions
    hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE'])
    // If they do, query users
    return ctx.db.query.users({}, info)
  },

  async order(parent, args, ctx, info) {
    // Make sure they are signed in
    if (!ctx.request.userId) {
      throw new Error('You are not signed in!')
    }
    // Query the current order
    const order = await ctx.db.query.order({
      where: { id: args.id },
    }, info)
    // Check if the have the permission to see this order
    const ownsOrder = order.user.id === ctx.request.userId;
    const hasPermissionToSeeOrder = ctx.request.user.permissions.includes('ADMIN')
    if (!ownsOrder || !hasPermissionToSeeOrder) {
      throw new Error('You do not own this order and/or you do not have permission to viww this order')
    }
    return order;
  }
};

module.exports = Query;
