
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            Service.hasMany(models.ContentMedia, {
                foreignKey: 'contentable_id',
                scope: {
                    contentable_type: 'service'
                }
            });
        }
    }
    Service.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        name: {
            type: DataTypes.STRING
        },
        service_sub_category_id: {
            type: DataTypes.UUID
        },
        base_price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        },
        detailed_description: {
            type: DataTypes.TEXT
        },
        service_status: {
            type: DataTypes.ENUM('active', 'inactive')
        },
        thumbnail_url: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Service'
    });
    return Service;
};
