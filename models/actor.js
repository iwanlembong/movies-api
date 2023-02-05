'use strict';

module.exports = (sequelize, DataTypes) => {
  const Actor = sequelize.define('Actor', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {});

  Actor.associate = function(models) {
    // associations can be defined here
    Actor.hasMany(models.Movie_Actor, {
      foreignKey: 'actorId',
      as: 'movie_actor'
    });
  };
  return Actor;
};
