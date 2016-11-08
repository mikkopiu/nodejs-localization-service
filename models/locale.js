'use strict';
module.exports = function(sequelize, DataTypes) {
  var Locale = sequelize.define('Locale', {
    locale: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Locale.hasMany(models.Localization);
      }
    }
  });
  return Locale;
};
