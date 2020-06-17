'use strict';
module.exports = (sequelize, DataTypes) => {
  const bestellingProduct = sequelize.define('bestellingProduct', {
    bestellingId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productNaam: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productPrijs: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hoeveelheid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  bestellingProduct.associate = function(models) {
    // associations can be defined here
  };
  return bestellingProduct;
};