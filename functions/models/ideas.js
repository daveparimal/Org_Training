'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ideas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ ContentMedia, User, PricingDetails }) {
      Ideas.hasMany(ContentMedia, {
        foreignKey: 'contentable_id',
        constraints: false,
        scope: {
          contentable_type: 'Ideas'
        }
      });
      Ideas.hasOne(PricingDetails, {
        foreignKey: 'contentable_id',
        constraints: false,
        scope: {
          contentable_type: 'Ideas'
        }
      });
      Ideas.belongsTo(User, { foreignKey: "created_by" });
    }
  }
  Ideas.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    thumbnail_id: DataTypes.UUID,
    status: DataTypes.ENUM('Published', 'Unpublished', 'Draft'),
    slug: DataTypes.STRING,
    created_by: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Ideas',
  });
  return Ideas;
};