'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('bestellings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      klantId: {
        type: Sequelize.INTEGER
      },
      adresId: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      straatnaam: {
        type: Sequelize.STRING
      },
      huisnummer: {
        type: Sequelize.INTEGER
      },
      postcode: {
        type: Sequelize.STRING
      },
      woonplaats: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bestellings');
  }
};