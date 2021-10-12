"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Taggable extends Model {
    static associate(models) {
      // define association here
    }
  }
  Taggable.init(
    {
      tag_id: DataTypes.UUID,
      contentable_id: DataTypes.UUID,
      contentable_type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Taggable",
    }
  );
  return Taggable;
};
