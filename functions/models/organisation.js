"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Organisation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Partner, ContentMedia }) {
      // define association here
      Organisation.hasMany(Partner, {foreignKey: "organisation_id"});
      Organisation.hasOne(ContentMedia, {
        foreignKey: 'contentable_id',
        constraints: false,
        scope: {
          contentable_type: 'Organisation'
        }
      });
    }
  }
  Organisation.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: { 
        type: DataTypes.STRING,
      },
      organisation_status: {
        type: DataTypes.ENUM('active', 'inactive')
      }
    },
    {
      sequelize,
      modelName: "Organisation",
    }
  );
  return Organisation;
};
