"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "basketProducts",
      [
        {
          productId: 1,
          basketId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 2,
          basketId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          productId: 4,
          basketId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("basketProducts", null, {});
  },
};
