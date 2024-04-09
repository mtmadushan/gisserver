const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');
const Layer = require('./layer');
const AttributeValue = require('./attributeValue');

class Geometry extends Model { }

Geometry.init({
    geometryType: {
        type: DataTypes.ENUM('POINT', 'LINESTRING', 'POLYGON'),
        allowNull: false
    },
    coordinates: {
        type: DataTypes.GEOMETRY,
        allowNull: false
    },
    layerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Layer,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Geometry',
    hooks: {
        beforeCreate: (geometry) => {
            if (geometry.lat && geometry.lng) {
                geometry.coordinates = { type: 'Point', coordinates: [geometry.lng, geometry.lat] };
            }
        }
    }
});

Geometry.hasMany(AttributeValue, { foreignKey: 'geometryId' });

module.exports = Geometry;