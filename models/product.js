'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    naam: DataTypes.STRING,
    omschrijving: DataTypes.TEXT,
    prijs: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};