"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "baskets",
      [
        {
          clientId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("baskets", null, {});
  },
};
