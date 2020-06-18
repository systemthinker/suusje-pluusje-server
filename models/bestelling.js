'use strict';
module.exports = (sequelize, DataTypes) => {
  const bestelling = sequelize.define('bestelling', {
    klantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "klants",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
 
  }, {});
  bestelling.associate = function(models) {
    bestelling.belongsTo(models.klant, { foreignKey: 'klantId',})
    bestelling.hasMany(models.product, { through: 'bestellingProduct',
                                         foreignKey: 'bestellingProductId'})
    
  };
  return bestelling;
};