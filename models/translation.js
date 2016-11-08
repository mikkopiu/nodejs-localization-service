'use strict';

module.exports = function (sequelize, DataTypes) {
    const Translation = sequelize.define(
        'Translation',
        {
            value: DataTypes.TEXT
        },
        {
            classMethods: {
                associate: function (models) {
                    Translation.belongsTo(models.Locale, {
                        onDelete: 'CASCADE',
                        foreignKey: {
                            allowNull: false
                        }
                    });

                    Translation.belongsTo(models.Localization, {
                        onDelete: 'CASCADE',
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }
        }
    );
    return Translation;
};
