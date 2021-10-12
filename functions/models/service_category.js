"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class ServiceCategory extends Model {
        static associate(models) {
            // define association here
        }
    }
    ServiceCategory.init(
        {
            name: DataTypes.STRING,
            icon_url: DataTypes.STRING,
            type: DataTypes.ENUM('Services', 'Consultation'),
            status: DataTypes.ENUM('Active', 'Inactive'),
        },
        {
            sequelize,
            modelName: "ServiceCategory"
        }
    );
    return ServiceCategory;
};