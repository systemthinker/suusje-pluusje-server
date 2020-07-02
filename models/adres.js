'use strict';
module.exports = (sequelize, DataTypes) => {
  const adres = sequelize.define('adres', {
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    streetName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    houseNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    houseNumberAddition: {
        
      type: DataTypes.STRING
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  adres.associate = function(models) {
    adres.belongsTo(models.client, { foreignKey: 'clientId'})
    
  };
  return adres;
};