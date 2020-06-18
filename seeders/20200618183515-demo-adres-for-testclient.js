"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "adres",
      [
        {
          klantId: 1,
          straatnaam: "Oost-Graftdijk",
          huisnummer: 51,
          huisnummerToevoeging: null,
          postcode: "1487MC",
          woonplaats: "Oost-Graftdijk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
