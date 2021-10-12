"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    static associate({ TagCategory }) {
      Tags.belongsTo(TagCategory, { foreignKey: "category_id" });
    }
  }
  Tags.init(
    {
      category_id: DataTypes.UUID,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tags",
    }
  );
  return Tags;
};
