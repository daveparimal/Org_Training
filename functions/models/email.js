"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Email extends Model {
    static associate({ User }) {
      Email.belongsTo(User, { foreignKey: "user_id", as: "user" });
    }
  }
  Email.init(
    {
      email: DataTypes.STRING,
      verified: { type: DataTypes.BOOLEAN, defaultValue: false },
      user_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Email",
    }
  );
  return Email;
};
