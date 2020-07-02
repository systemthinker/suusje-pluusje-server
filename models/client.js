'use strict';
module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define('client', {
    name: {
      type: DataTypes.STRING,
      
    },
    lastName: {
      type: DataTypes.STRING,
      
    },
    email: {
      type: DataTypes.STRING,
      
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  client.associate = function(models) {
    client.hasOne(models.adres)
    client.hasOne(models.basket)
    
    
  };
  return client;
};