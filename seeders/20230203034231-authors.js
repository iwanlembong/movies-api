'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Authors', [
      {
          "first_name": "Joel",
          "last_name": "Ceon",
          "createdAt": new Date(),
          "updatedAt": new Date(),
      },
      {
          "first_name": "Bent",
          "last_name": "Hamer",
          "createdAt": new Date(),
          "updatedAt": new Date(),
      },
      {
         "first_name": "Woody",
          "last_name": "Allen",
          "createdAt": new Date(),
          "updatedAt": new Date(),      
      },
      {
          "first_name": "David",
          "last_name": "Cronenberg",
          "createdAt": new Date(),
          "updatedAt": new Date(),      
      },
      {
          "first_name": "Barbet",
          "last_name": "Schroeder",
          "createdAt": new Date(),
          "updatedAt": new Date(),      
      },
      {
          "first_name": "Wayne",
          "last_name": "Wang",
          "createdAt": new Date(),
          "updatedAt": new Date(),      
      },
      {
          "first_name": "Robert",
          "last_name": "Towne",
          "createdAt": new Date(),
          "updatedAt": new Date(),      
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};