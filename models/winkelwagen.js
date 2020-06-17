'use strict';
module.exports = (sequelize, DataTypes) => {
  const winkelwagen = sequelize.define('winkelwagen', {
    klantId: DataTypes.INTEGER,
    winkelwagenId: DataTypes.INTEGER
  }, {});
  winkelwagen.associate = function(models) {
    // associations can be defined here
  };
  return winkelwagen;
};