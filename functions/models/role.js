"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate({ User, Permission }) {
      Role.belongsToMany(User, {
        through: "UserRoles",
        as: "users",
        foreignKey: "role_id",
      });
      Role.belongsToMany(Permission, {
        through: "RolePermissions",
        as: "permissions",
        foreignKey: "role_id",
      });
    }
  }
  Role.init(
    {
      id: { type: DataTypes.UUID, primaryKey: true },
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Name must be valid",
          },
        },
        unique: true
      },
      display_name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "display_name must be valid",
          },
        },
      },
      type: {
        type: DataTypes.ENUM,
        values: ['admin', 'customer', 'internal_partner', 'external_partner']
      }
    },
    {
      sequelize,
      modelName: "Role",
    }
  );
  return Role;
};
