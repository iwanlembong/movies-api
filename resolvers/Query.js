const { User, Author, Movie, Actor, Movie_Actor, sequelize } = require('../models');
const { getUserId } = require('./utils');

const movie = async (_, args, context) => {
  const {authorId} = args;
  const movies = await Movie.findAll({
    where: authorId ? {authorId} : {},
    include: [
      {
        model: Movie_Actor,
        as: 'movie_actor', 
        include: [{
          model: User,
          as: 'user',
        }]
      },
      { 
        model: Author,
        as: 'author'
      }
    ]
  });
  return movies;
};


const userlist = async (_, args, context) => {
  const user = await User.findAll({
    where: {},
  });
  return user;
};

const authors = async (_, args, context) => {
  const authors = await Author.findAll({
    where: {},
  });
  return authors;
};

const actors = async (_, args, context) => {
  const actors = await Actor.findAll({
    where: {},
  });
  return actors;
};

const me = async (_, args, context) => {
  const userId = getUserId(context);
  if (userId) {
    const user = await User.findOne({
      where: { id: userId },
    });
    return user;
  }
};

module.exports = {
  movie,
  authors,
  actors,
  userlist,
  me,
}