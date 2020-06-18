'use strict';
module.exports = (sequelize, DataTypes) => {
  const winkelwagenProduct = sequelize.define('winkelwagenProduct', {
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
      model: "products",
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  },
      
    winkelwagenId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
      model: "winkelwagens",
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  },
  }, {});
  winkelwagenProduct.associate = function(models) {
    winkelwagenProduct.belongsTo(models.product)
    winkelwagenProduct.belongsTo(models.winkelwagen)
  };
  return winkelwagenProduct;
};