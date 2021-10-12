"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContentMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Ideas, Article, Organisation, Service }) {
      ContentMedia.belongsTo(Ideas, {
        foreignKey: "contentable_id",
        as: "Ideas",
        constraints: false,
      });
      ContentMedia.belongsTo(Article, {
        foreignKey: "contentable_id",
        as: "Article",
        constraints: false,
      });
      ContentMedia.belongsTo(Organisation, {
        foreignKey: "contentable_id",
        as: "Organisation",
        constraints: false,
      });
      ContentMedia.belongsTo(Service, {
        foreignKey: "contentable_id",
        as: "Services",
      });
    }
  }
  ContentMedia.init(
    {
      thumbnail_url: DataTypes.STRING,
      url: DataTypes.STRING,
      type: DataTypes.STRING,
      order: DataTypes.INTEGER,
      contentable_id: DataTypes.UUID,
      contentable_type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ContentMedia",
    }
  );
  return ContentMedia;
};
