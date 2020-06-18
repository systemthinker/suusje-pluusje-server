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
    product.belongsToMany(models.winkelwagen, { through: 'winkelwagenProduct',
                                                foreignKey: 'winkelwagenProductId' });
    product.belongsToMany(models.bestelling, { through: 'bestellingProduct',
                                                foreignKey: 'bestellingProductId'});
    
   
  };
  return product;
};