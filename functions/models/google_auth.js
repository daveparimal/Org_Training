"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GoogleAuth extends Model {
    static associate({ User }) {
      GoogleAuth.belongsTo(User, { foreignKey: "user_id", as: "user" });
    }
  }
  GoogleAuth.init(
    {
      id: { type: DataTypes.UUID, primaryKey: true },
      google_id: DataTypes.STRING,
      email: DataTypes.STRING,
      profile_url: DataTypes.STRING,
      user_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "GoogleAuth",
    }
  );
  return GoogleAuth;
};
