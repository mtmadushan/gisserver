const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');
const Project = require( './project' )
const AttributeType = require('./attributeType');

class Layer extends Model { }

Layer.init(
  {
    layerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    layerType: {
        type: DataTypes.ENUM('POINT', 'POLYGON', 'LINE'),
        allowNull: false
    },
    dxfUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    projectionType: {
      type: DataTypes.ENUM('SLD99', 'WGS84'),
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Layer',
  }
);

Layer.hasMany(AttributeType, { foreignKey: 'layerId' });
AttributeType.belongsTo(Layer, { foreignKey: 'layerId' });

Project.hasMany(Layer, { foreignKey: 'projectId' });
Layer.belongsTo(Project, { foreignKey: 'projectId' });

module.exports = Layer;