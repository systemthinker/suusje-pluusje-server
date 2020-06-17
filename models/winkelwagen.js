'use strict';
module.exports = (sequelize, DataTypes) => {
  const winkelwagen = sequelize.define('winkelwagen', {
    klantId: DataTypes.INTEGER,
    winkelwagenId: DataTypes.INTEGER
  }, {});
  winkelwagen.associate = function(models) {
    winkelwagen.belongsTo(models.klant)
    winkelwagen.belongsToMany(models.product, { through: 'winkelwagenproduct' });
  };
  return winkelwagen;
};