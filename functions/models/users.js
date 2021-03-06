"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasOne(models.Aadhaar, {
        foreignKey: "userId",
      });
    }
  }
  Users.init(
    {
      id: { type: DataTypes.UUID, primaryKey: true },
      full_name: DataTypes.STRING,
      country_code: DataTypes.INTEGER,
      aadhaar_id: DataTypes.INTEGER,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
