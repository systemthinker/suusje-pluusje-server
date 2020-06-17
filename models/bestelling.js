'use strict';
module.exports = (sequelize, DataTypes) => {
  const bestelling = sequelize.define('bestelling', {
    klantId: DataTypes.INTEGER,
    adresId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    straatnaam: DataTypes.STRING,
    huisnummer: DataTypes.INTEGER,
    postcode: DataTypes.STRING,
    woonplaats: DataTypes.STRING
  }, {});
  bestelling.associate = function(models) {
    bestelling.belongsTo(models.klant)
    bestelling.hasOne(models.adres)
    bestelling.belongsToMany(models.product, { through: 'bestellingproduct' });
  };
  return bestelling;
};