
const { ApolloServer} = require('apollo-server-express');

const { createServer } = require('http');
const { makeExecutableSchema } = require('graphql-tools');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken');
const APP_SECRET = 'React-Native-GraphQL';

const typeDefs = require('./schema');
const resolvers = require('../resolvers');

const port = process.env.PORT || 4000;

const corsConfig = {
    credentials: true,
    allowedHeaders: ['Authorization'],
    exposedHeaders: ['Authorization'],
  };

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();
const server = createServer(app);

let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        schema,
        context: ({ req }) => {
            return {
              req: req
            }
          },
    introspection: true,
    playground: {
      endpoint: '/graphql'
    }
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: corsConfig });
}

// Start our server if we're not in a test env.
startServer();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to Homepage");
  });

server.listen({port}, () => console.log(`Server is running at http://localhost:${port}/graphql`))