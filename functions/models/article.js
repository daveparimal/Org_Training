"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ContentMedia, User, PricingDetails }) {
      // define association here

      Article.hasMany(ContentMedia, {
        foreignKey: "contentable_id",
        constraints: false,
        scope: {
          contentable_type: "Article",
        },
      });
      Article.hasOne(PricingDetails, {
        foreignKey: "contentable_id",
        constraints: false,
        scope: {
          contentable_type: "Article",
        },
      });
      Article.belongsTo(User, { foreignKey: "created_by" });
    }
  }
  Article.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      body_content: {
        type: DataTypes.TEXT,
      },
      created_by: {
        type: DataTypes.UUID,
      },
      thumbnail_url: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM("Published", "Unpublished", "Draft"),
      },
      slug: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Article",
    }
  );
  return Article;
};
