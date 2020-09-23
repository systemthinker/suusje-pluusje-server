"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("clients", "middleName", Sequelize.STRING),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("clients");
  },
};
