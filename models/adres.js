'use strict';
module.exports = (sequelize, DataTypes) => {
  const adres = sequelize.define('adres', {
    klantId: {
      type: DataTypes.INTEGER,
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
  adres.associate = function(models) {
    adres.belongsTo(models.klant, { foreignKey: 'klantId'})
    
  };
  return adres;
};