"use strict";
module.exports = (sequelize, DataTypes) => {
  const addressbilling = sequelize.define(
    "addressbilling",

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
  addressbilling.associate = function (models) {
    addressbilling.belongsTo(models.client, { foreignKey: "clientId" });
  };
  return addressbilling;
};
