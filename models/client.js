'use strict';
module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define('client', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  client.associate = function(models) {
    client.hasOne(models.adres)
    client.hasOne(models.basket)
    client.hasMany(models.order)
    
  };
  return client;
};