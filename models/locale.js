'use strict';

module.exports = function (sequelize, DataTypes) {
    const Locale = sequelize.define(
        'Locale',
        {
            locale: DataTypes.STRING,
            fullName: DataTypes.STRING
        },
        {
            classMethods: {
                associate: function (models) {
                    Locale.hasMany(models.Localization);
                }
            }
        }
    );
    return Locale;
};
