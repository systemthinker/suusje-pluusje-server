'use strict';
module.exports = (sequelize, DataTypes) => {
  const winkelwagen = sequelize.define('winkelwagen', {
    klantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    winkelwagenId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  winkelwagen.associate = function(models) {
    winkelwagen.belongsTo(models.klant)
    winkelwagen.belongsToMany(models.product, { through: 'winkelwagenproduct' });
  };
  return winkelwagen;
};