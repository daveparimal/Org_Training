"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TagCategory extends Model {
    static associate({ Tags }) {
      TagCategory.hasMany(Tags, { foreignKey: "category_id" });
    }
  }
  TagCategory.init(
    {
      category: DataTypes.STRING,
      created_by: DataTypes.STRING,
      status: DataTypes.ENUM("Active", "Inactive"),
      include_in_ideas: DataTypes.BOOLEAN,
      include_in_articles: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "TagCategory",
    }
  );
  return TagCategory;
};
