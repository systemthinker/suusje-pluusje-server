'use strict';
module.exports = (sequelize, DataTypes) => {
  const orderProduct = sequelize.define('orderProduct', {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
        model: "orders",
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
  orderProduct.associate = function(models) {
  
  };
  return orderProduct;
};