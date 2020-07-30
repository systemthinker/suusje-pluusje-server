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
          isVerified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy",
          lastName: "dum",
          email: "a@a.com",
          isVerified: true,
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "anon",
          createdAt: new Date(),
          updatedAt: new Date(),
          isVerified: false,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("clients", null, {});
  },
};
