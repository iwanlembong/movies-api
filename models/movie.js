'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    descriptions: DataTypes.STRING
  }, {});

  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.Movie_Actor, {
      foreignKey: 'movieId',
      as: 'movie_actor'
    });
    Movie.belongsTo(models.Author, {
      foreignKey: 'authorId',
      as: 'author',
    });
  };
  return Movie;
};