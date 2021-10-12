

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Zone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
        }
    }
    Zone.init({
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        status: {
            allowNull: false,
            type: DataTypes.ENUM,
            values: ['Active', 'Inactive']
        },
        geo_location: {
            allowNull: false,
            type: DataTypes.GEOMETRY
        }
    }, {
        sequelize,
        modelName: 'Zone'
    });
    return Zone;
};
