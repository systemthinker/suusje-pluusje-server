"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        "addressbillings",
        "houseNumber",
        Sequelize.STRING
      ),
      queryInterface.removeColumn(
        "addressbillings",
        "houseNumnber",
        Sequelize.STRING
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("addressbillings");
  },
};
