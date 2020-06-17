'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    naam: DataTypes.STRING,
    omschrijving: DataTypes.TEXT,
    prijs: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {});
  product.associate = function(models) {
    product.belongsToMany(models.winkelwagen, { through: 'winkelwagenproduct' });
    product.belongsToMany(models.bestelling, { through: 'bestellingproduct'});
  };
  return product;
};