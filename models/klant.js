'use strict';
module.exports = (sequelize, DataTypes) => {
  const klant = sequelize.define('klant', {
    voornaam: {
      type: DataTypes.STRING,
      allowNull: false
    },
    achternaam: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    wachtwoord: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  klant.associate = function(models) {
    klant.hasOne(models.adres)
    klant.hasOne(models.winkelwagen)
    klant.hasMany(models.bestelling)
    
  };
  return klant;
};