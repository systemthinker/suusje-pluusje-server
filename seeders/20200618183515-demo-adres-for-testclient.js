"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "adres",
      [
        {
          clientId: 1,
          streetName: "Oost-Graftdijk",
          houseNumber: 51,
          houseNumberAddition: null,
          postalCode: "1487MC",
          city: "Oost-Graftdijk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("adres", null, {});
  },
};
