"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ GoogleAuth, Role, Email, Ideas, Partner, Article }) {
      User.hasMany(GoogleAuth, { as: "google_auths", foreignKey: "user_id" });
      User.hasOne(Email, { foreignKey: "user_id" });
      User.belongsToMany(Role, {
        through: "UserRoles",
        as: "roles",
        foreignKey: "user_id",
      });
      User.hasOne(Partner, { foreignKey: "user_id" });
      User.hasOne(Ideas, { foreignKey: "created_by" });
      User.hasOne(Article, { foreignKey: "created_by" });
    }
  }
  User.init(
    {
      id: { type: DataTypes.UUID, primaryKey: true },
      full_name: DataTypes.STRING,
      mobile: DataTypes.STRING,
      email: DataTypes.STRING,
      timezone: DataTypes.STRING,
      default_language: DataTypes.STRING,
      country_code: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
        },
        defaultValue: 91,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
