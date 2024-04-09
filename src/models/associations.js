const Layer = require("./layer");
const Geometry = require("./geometries");

const setupAssociations = () => {
  // A Layer can have many Geometries
  Layer.hasMany(Geometry, {
    foreignKey: "layerId",
    as: "geometries",
  });

  // A Geometry belongs to a Layer
  Geometry.belongsTo(Layer, {
    foreignKey: "layerId",
    as: "layer",
  });
  
  // A Geometry can have many AttributeValues
  Geometry.hasMany(AttributeValue, {
    foreignKey: 'geometryId',
    as: 'attributeValues',
  });

  // An AttributeValue belongs to a Geometry
  AttributeValue.belongsTo(Geometry, {
    foreignKey: 'geometryId',
    as: 'geometry',
  });

  // An AttributeValue belongs to an AttributeType
  AttributeValue.belongsTo(AttributeType, {
    foreignKey: 'attributeTypeId',
    as: 'attributeType',
  });
};

module.exports = setupAssociations;
