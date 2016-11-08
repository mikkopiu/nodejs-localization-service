'use strict';

module.exports = function (sequelize, DataTypes) {
    const Locale = sequelize.define(
        'Locale',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING
            },
            fullName: DataTypes.STRING
        },
        {
            classMethods: {
                associate: function (models) {
                    Locale.hasMany(models.Translation);
                }
            }
        }
    );
    return Locale;
};
