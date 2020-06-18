'use strict';
module.exports = (sequelize, DataTypes) => {
  const winkelwagenProduct = sequelize.define('winkelwagenProduct', {
    productId: DataTypes.INTEGER,
    winkelwagenId: DataTypes.INTEGER
  }, {});
  winkelwagenProduct.associate = function(models) {
    winkelwagenProduct.belongsTo(models.product)
    winkelwagenProduct.belongsTo(models.winkelwagen)
  };
  return winkelwagenProduct;
};