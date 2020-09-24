"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("clients", "salutation", Sequelize.STRING),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("clients");
  },
};
