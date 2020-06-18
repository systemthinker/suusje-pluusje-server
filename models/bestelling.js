'use strict';
module.exports = (sequelize, DataTypes) => {
  const bestelling = sequelize.define('bestelling', {
    klantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    adresId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    straatnaam: {
      type: DataTypes.STRING,
      allowNull: false
    },
    huisnummer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    woonplaats: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  bestelling.associate = function(models) {
    bestelling.belongsTo(models.klant, { foreignKey: 'klantId',})
    bestelling.hasMany(models.product, { trough: 'bestellingProduct',
                                         foreignKey: 'bestellingProductId'})
    
  };
  return bestelling;
};