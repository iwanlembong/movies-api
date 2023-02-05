
const { ApolloServer, gql } = require('apollo-server-express');

const { createServer } = require('http');
const { makeExecutableSchema } = require('graphql-tools');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const resolvers = require('../resolvers')

const { User, Movie, Actor, Movie_Actor, Author, sequelize } = require('../models');

const port = process.env.PORT || 4000;

const typeDefs = gql`
  type Query {
    currentUser: User
    feed(authorId: ID): [Movie!]!
    authors: [Author!]!
  }
  type Mutation {
    signUp(email: String!, password: String!, username: String!): AuthPayload
    signIn(email: String, username: String, password: String!): AuthPayload
    addMovieActor(movieId: ID!, actorId: ID!): ID
    removeMovieActor(movieId: ID!, actorId: ID!): ID
  }
  type AuthPayload {
    token: String
    user: User
  }
  type User {
    id: ID!
    username: String!
    email: String!
    movie_actors: [Movie_Actor!]!
  }
  type Author {
    id: ID!
    first_name: String!
    last_name: String
  }
  type Movie {
    id: ID!
    title: String!
    descriptions: String!
    author: Author
    movie_actors: [Movie_Actor!]!
  }
  type Movie_Actor {
    id: ID!
    movie: Movie
    user: User
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const apolloServer = new ApolloServer({
  schema,
  context: request => {
    return {
      ...request
    };
  },
  introspection: true,
  playground: {
    endpoint: '/graphql'
  }
});

const app = express();
const server = createServer(app);
apolloServer.applyMiddleware({ app });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

server.listen({port}, () => console.log(`Server is running at http://localhost:${port}/graphql`))