"use strict";
module.exports = (sequelize, DataTypes) => {
  const addressBilling = sequelize.define(
    "addressBilling",

    {
      clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      streetName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      houseNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      houseNumberAddition: {
        type: DataTypes.STRING,
      },
      postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  addressBilling.associate = function (models) {
    addressBilling.belongsTo(models.client, { foreignKey: "clientId" });
  };
  return addressBilling;
};
