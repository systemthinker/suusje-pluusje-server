'use strict';
module.exports = (sequelize, DataTypes) => {
  const bestellingProduct = sequelize.define('bestellingProduct', {
    bestellingId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    productNaam: DataTypes.STRING,
    productPrijs: DataTypes.INTEGER,
    hoeveelheid: DataTypes.INTEGER
  }, {});
  bestellingProduct.associate = function(models) {
    // associations can be defined here
  };
  return bestellingProduct;
};