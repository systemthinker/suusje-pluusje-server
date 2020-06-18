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
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "klants",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },

      // bestellingProductId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: "bestellingProducts",
      //     key: "id"
      //   },
      //   onUpdate: "CASCADE",
      //   onDelete: "CASCADE"
      // },
     
      productPrijs: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      hoeveelheid: {
        type: Sequelize.INTEGER,
        allowNull: false
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