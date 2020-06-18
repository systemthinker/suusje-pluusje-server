"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "clients",
      [
        {
          name: "testuser",
          lastName: "test",
          email: "test@test.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy",
          lastName: "dum",
          email: "a@a.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("clients", null, {});
  },
};
