"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PricingDetails extends Model {
    static associate({ Ideas, Article }) {
      PricingDetails.belongsTo(Ideas, {
        foreignKey: "contentable_id",
        as: "Ideas",
        constraints: false,
      });
      PricingDetails.belongsTo(Article, {
        foreignKey: "contentable_id",
        as: "Article",
        constraints: false,
      });
    }
  }
  PricingDetails.init(
    {
      currency: DataTypes.STRING,
      total_price: DataTypes.STRING,
      price_breakup: DataTypes.JSONB,
      contentable_id: DataTypes.UUID,
      contentable_type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PricingDetails",
    }
  );
  return PricingDetails;
};
