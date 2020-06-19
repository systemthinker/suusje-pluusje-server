'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "clients",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },

    productPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
 
  }, {});
  order.associate = function(models) {
    order.belongsTo(models.client, { foreignKey: 'clientId',})
    order.belongsToMany(models.product, { through: 'orderProduct',
                                    foreignKey: 'orderProductId'})
    
  };
  return order;
};