'use strict';

module.exports = (sequelize, DataTypes) => {
  const Movie_Actor = sequelize.define('Movie_Actor', {
    movieId: DataTypes.INTEGER,
    actorId: DataTypes.INTEGER
  }, {});
  Movie_Actor.associate = function(models) {
    // associations can be defined here
    Movie_Actor.belongsTo(models.Movie, {
      foreignKey: 'movieId',
      onDelete: 'CASCADE',
      as: 'movie'
    });
    Movie_Actor.belongsTo(models.Actor, {
      foreignKey: 'actorId',
      onDelete: 'CASCADE',
      as: 'actor'
    });
    Movie_Actor.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      as: 'user'
    });
  };
  return Movie_Actor;
};