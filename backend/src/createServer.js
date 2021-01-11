const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require("./db")

// Create the GraphQL Yoga server

function createServer() {
    console.log('\x1b[33m%s\x1b[0m', `Currently in production? ${process.env.NODE_ENV === 'production'}`)
    return new GraphQLServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation,
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false
        },
        context: req => ({ ...req, db })
    });
};

module.exports = createServer;