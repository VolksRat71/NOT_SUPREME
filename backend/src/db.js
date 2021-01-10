// This file connects with remote Prisma DB
const { Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'https://not-supreme-300f69abc5.herokuapp.com/not-supreme-backend/prod',
    secret: "shhhh",
    debug: false,
})

module.exports = db;