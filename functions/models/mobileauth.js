"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MobileAuth extends Model {
    static associate(models) {
      // define association here
    }
  }
  MobileAuth.init(
    {
      id: { type: DataTypes.UUID, primaryKey: true },
      mobile: DataTypes.STRING,
      otp: DataTypes.STRING,
      expired_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "MobileAuth",
    }
  );
  return MobileAuth;
};
