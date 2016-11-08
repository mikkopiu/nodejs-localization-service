'use strict';

module.exports = function (sequelize, DataTypes) {
    const Localization = sequelize.define(
        'Localization',
        {
            localizationId: DataTypes.STRING,
            value: DataTypes.STRING
        },
        {
            classMethods: {
                associate: function (models) {
                    Localization.belongsTo(models.Locale, {
                        onDelete: 'CASCADE',
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }
        }
    );
    return Localization;
};
