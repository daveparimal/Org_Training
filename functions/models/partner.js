'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Partner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Organisation}) {
      // define association here
      Partner.belongsTo(User, { foreignKey: "user_id", as: "user" })
      Partner.belongsTo(Organisation, { foreignKey: "organisation_id", as:'organisation'})
    }
  };
  Partner.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    user_id: DataTypes.UUID,
    partner_status: {
      type: DataTypes.ENUM('active', 'inactive', 'unverified')
    },
    organisation_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Partner',
  });
  return Partner;
};