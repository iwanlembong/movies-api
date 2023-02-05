'use strict';

module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {});

  Author.associate = function(models) {
    // associations can be defined here
    Author.hasMany(models.Movie, {
      foreignKey: 'authorId',
      as: 'movie'
    });
  };
  return Author;
};