'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    static associate({ Role }) {
      Permission.belongsToMany(Role, {
        through: "RolePermissions",
        as: "roles",
        foreignKey: "permission_id",
      });
    }
  }
  Permission.init({
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
  }, {
    sequelize,
    modelName: 'Permission',
  });
  return Permission;
};