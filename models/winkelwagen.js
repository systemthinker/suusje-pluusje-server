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
    winkelwagen.belongsTo(models.klant, { foreignKey: 'klantId'})
    winkelwagen.belongsToMany(models.product, { through: 'winkelwagenProduct',
                                                foreignKey: 'winkelwagenProductId' });
   
  };
  return winkelwagen;
};