'use strict';
module.exports = (sequelize, DataTypes) => {
  const winkelwagenProduct = sequelize.define('winkelwagenProduct', {
    productId: DataTypes.INTEGER,
    winkelwagenId: DataTypes.INTEGER
  }, {});
  winkelwagenProduct.associate = function(models) {
    // associations can be defined here
  };
  return winkelwagenProduct;
};