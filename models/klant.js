'use strict';
module.exports = (sequelize, DataTypes) => {
  const klant = sequelize.define('klant', {
    voornaam: DataTypes.STRING,
    achternaam: DataTypes.STRING,
    email: DataTypes.STRING,
    wachtwoord: DataTypes.STRING
  }, {});
  klant.associate = function(models) {
    klant.hasOne(models.adres)
    klant.hasMany(models.bestelling)
    klant.hasOne(models.winkelwagen)
  };
  return klant;
};