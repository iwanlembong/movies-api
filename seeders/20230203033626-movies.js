'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Movies', [
      {
          "title": "Frozen II",
          "descriptions": "Elsa, Anna, Kristoff and Olaf are going far in the forest to know the truth about an ancient mystery of their kingdom..",
          "authorId": 3,
          "createdAt": new Date(),
          "updatedAt": new Date(),
      },
      {
          "title": "Spider-Man: Far From Home",
          "descriptions": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
          "authorId": 5,
          "createdAt": new Date(),
          "updatedAt": new Date(),
      },
      {
          "title": "Joker",
          "descriptions": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
          "authorId": 4,
          "createdAt": new Date(),
          "updatedAt": new Date(),
      },
      {
          "title": "Once Upon a Time... in Hollywood",
          "descriptions": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
          "authorId": 1,
          "createdAt": new Date(),
          "updatedAt": new Date(),
      },
      {
          "title": "The Lion King",
          "descriptions": "Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother and a former heir to the throne has plans of his own.",
          "authorId": 2,
          "createdAt": new Date(),
          "updatedAt": new Date(),
      },
      {
          "title": "Ford v Ferrari",
          "descriptions": "American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company.",
          "authorId": 1,
          "createdAt": new Date(),
          "updatedAt": new Date(),
      },
      {
          "title": "Aladdin",
          "descriptions": "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
          "authorId": 3,
          "createdAt": new Date(),
          "updatedAt": new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};