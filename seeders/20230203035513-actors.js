'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Actors', [
      {
          "first_name": "Tom",
          "last_name": "Hanks",
          "createdAt": new Date(),
          "updatedAt": new Date(),
      },
      {
          "first_name": "Danzel",
          "last_name": "Washington",
          "createdAt": new Date(),
          "updatedAt": new Date(),
      },
      {
         "first_name": "Samuel",
          "last_name": "L. Jackson",
          "createdAt": new Date(),
          "updatedAt": new Date(),      
      },
      {
          "first_name": "Tom",
          "last_name": "Cruise",
          "createdAt": new Date(),
          "updatedAt": new Date(),      
      },
      {
          "first_name": "Johnny",
          "last_name": "Deep",
          "createdAt": new Date(),
          "updatedAt": new Date(),      
      },
      {
          "first_name": "Robert",
          "last_name": "De Niro",
          "createdAt": new Date(),
          "updatedAt": new Date(),      
      },
      {
          "first_name": "Leonardo",
          "last_name": "DiCaprio",
          "createdAt": new Date(),
          "updatedAt": new Date(),      
      },
      {
          "first_name": "Will",
          "last_name": "Smith",
          "createdAt": new Date(),
          "updatedAt": new Date(),      
      },
      {
          "first_name": "Morgan",
          "last_name": "Freeman",
          "createdAt": new Date(),
          "updatedAt": new Date(),      
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Actors', null, {});
  }
};