require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('./schema');
const resolvers = require('../resolvers');

const port = process.env.PORT || 4000;
const APP_SECRET = 'React-Native-GraphQL';


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Set up Apollo Server
const server = new ApolloServer({
    schema,
    //dataSources,
    context: request => {
      return {
        ...request
      };
    },
    introspection: true,
    playground: {
        endpoint: '/graphql'
    },
    apollo: {
      key: process.env.APOLLO_KEY,
    },
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })]
  });

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test
if (process.env.NODE_ENV !== 'test') {
    server.listen(port).then(() => {
      console.log(`Server is running at http://localhost:${port}/graphql`);
    });
  }