const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Your schema will go here

  type Query {
    userlist: [User!]!
    me: User
    movie(authorId: ID): [Movie!]!
    authors: [Author!]!
    actors: [Actor!]!
  }

  type Mutation {
    signUp(email: String!, password: String!, username: String!): AuthPayload
    signIn(email: String, username: String, password: String!): AuthPayload
    addMovie(title: String!, descriptions: String!, authorId: ID!, actorId: ID!): AuthPayload
    removeMovie(movieId: ID!): AuthPayload
  }

  type AuthPayload {
    token: String
    user: User
  }

  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Movie {
    id: ID!
    title: String!
    descriptions: String!
    author: Author
    movie_actors: [Movie_Actor!]!
  }

  type Author {
    id: ID!
    first_name: String!
    last_name: String
  }

  type Actor {
    id: ID!
    first_name: String!
    last_name: String
  }

  type Movie_Actor {
    id: ID!
    movieId: ID!
    actor: Actor
    user: User
  }
`;



module.exports = typeDefs;