"use strict";
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  product.associate = function (models) {
    product.belongsToMany(models.basket, {
      through: "basketProducts",
      unique: false,
    });
    product.belongsToMany(models.order, { through: "orderProducts" });
  };
  return product;
};
