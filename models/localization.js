'use strict';

module.exports = function (sequelize, DataTypes) {
    const Localization = sequelize.define(
        'Localization',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            }
        },
        {
            classMethods: {
                associate: function (models) {
                    Localization.hasMany(models.Translation);
                }
            }
        }
    );
    return Localization;
};
