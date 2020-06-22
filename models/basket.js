'use strict';
module.exports = (sequelize, DataTypes) => {
  const basket = sequelize.define('basket', {
    clientId: {
      type: DataTypes.INTEGER,
      
    },

  }, {});
  basket.associate = function(models) {
    basket.belongsTo(models.client, { foreignKey: 'clientId'})
    basket.belongsToMany(models.product, { through: 'basketProducts'});
   
  };
  return basket;
};