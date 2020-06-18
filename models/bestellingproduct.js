'use strict';
module.exports = (sequelize, DataTypes) => {
  const bestellingProduct = sequelize.define('bestellingProduct', {
    bestellingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
        model: "bestellings",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    
    },
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
   
    
  }, {});
  bestellingProduct.associate = function(models) {
    bestellingProduct.belongsTo(models.bestelling)
    bestellingProduct.belongsTo(models.product)
  };
  return bestellingProduct;
};