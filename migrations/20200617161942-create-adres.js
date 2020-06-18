'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('adres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      klantId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "klants",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      straatnaam: {
        allowNull: false,
        type: Sequelize.STRING
      },
      huisnummer: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      postcode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      woonplaats: {
        allowNull: false,
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
    return queryInterface.dropTable('adres');
  }
};