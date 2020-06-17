'use strict';
module.exports = (sequelize, DataTypes) => {
  const klant = sequelize.define('klant', {
    voornaam: {
      type: DataTypes.STRING,
      allowNull: false
    },
    voornaam: {
      type: DataTypes.STRING,
      allowNull: false
    },
    voornaam: {
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
    klant.hasMany(models.bestelling)
    klant.hasOne(models.winkelwagen)
  };
  return klant;
};