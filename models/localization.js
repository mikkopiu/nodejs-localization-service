'use strict';
module.exports = function(sequelize, DataTypes) {
  var Localization = sequelize.define('Localization', {
    locale: DataTypes.STRING,
    value: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
          Localization.belongsTo(models.Locale);
      }
    }
  });
  return Localization;
};
