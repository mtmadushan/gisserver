const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

class AttributeValue extends Model {}

AttributeValue.init(
  {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'AttributeValue',
  }
);

module.exports = AttributeValue;