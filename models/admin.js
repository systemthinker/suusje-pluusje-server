"use strict";
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define(
    "admin",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  admin.associate = function (models) {
    // associations can be defined here
  };
  return admin;
};
