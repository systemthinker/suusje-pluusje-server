"use strict";
module.exports = (sequelize, DataTypes) => {
  const client = sequelize.define(
    "client",
    {
      name: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,

        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      middleName: {
        type: DataTypes.STRING,
      },
      salutation: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  client.associate = function (models) {
    client.hasOne(models.adres);
    client.hasOne(models.basket);
    client.hasOne(models.addressBilling);
  };
  return client;
};
