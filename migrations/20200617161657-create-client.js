'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        
        type: Sequelize.STRING
      },
      lastName: {
        
        type: Sequelize.STRING
      },
      email: {
        
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      isVerified: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }

      // add verified column
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clients');
  }
};