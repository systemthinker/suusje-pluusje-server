'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    naam: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    omschrijving: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    prijs: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  product.associate = function(models) {
    product.belongsToMany(models.winkelwagen, { through: 'winkelwagenproduct' });
    product.belongsToMany(models.bestelling, { through: 'bestellingproduct'});
  };
  return product;
};