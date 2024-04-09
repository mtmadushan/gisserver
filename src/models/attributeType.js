const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

class AttributeType extends Model {}

AttributeType.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('TEXT', 'NUMBER'),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'AttributeType',
  }
);

module.exports = AttributeType;