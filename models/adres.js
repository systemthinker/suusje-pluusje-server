'use strict';
module.exports = (sequelize, DataTypes) => {
  const adres = sequelize.define('adres', {
    klantId: DataTypes.INTEGER,
    straatnaam: DataTypes.STRING,
    huisnummer: DataTypes.INTEGER,
    postcode: DataTypes.STRING,
    woonplaats: DataTypes.STRING
  }, {});
  adres.associate = function(models) {
    adres.belongsTo(models.klant)
    adres.belongsTo(models.bestelling)
  };
  return adres;
};