"use strict";
module.exports = (sequelize, DataTypes) => {
  const basketProduct = sequelize.define(
    "basketProduct",
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      basketId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "baskets",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {}
  );
  basketProduct.associate = function (models) {};
  return basketProduct;
};
