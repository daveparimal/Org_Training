'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hobbie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hobbie.init({
    name:{
      type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "name should not be null" },
          notEmpty: { msg: "name should not be empty" },
        },
    }
  }, {
    sequelize,
    modelName: 'hobbie',
  });
  return hobbie;
};