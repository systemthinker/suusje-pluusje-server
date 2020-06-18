'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      naam: {
        type: Sequelize.STRING
      },
      omschrijving: {
        type: Sequelize.TEXT
      },
      prijs: {
        type: Sequelize.INTEGER
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      // winkelwagenProductId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "winkelwagenProducts",
      //     key: "id"
      //   },
      //   onUpdate: "CASCADE",
      //   onDelete: "CASCADE"
      // },
      // bestellingProductId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "bestellingProducts",
      //     key: "id"
      //   },
      //   onUpdate: "CASCADE",
      //   onDelete: "CASCADE"
      // },
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
    return queryInterface.dropTable('products');
  }
};