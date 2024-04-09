const sequelize = require("../db/sequelize");
const Geometry = require("../models/geometries");
const AttributeValue = require('../models/attributeValue');

class GeometryRepository {
  async createGeometry(geometry) {
    try {
      const { geometryType, coordinates } = geometry;
      let geomCoordinates;
      switch (geometryType) {
        case "POINT":
          // Assuming coordinates is an array [lng, lat]
          geomCoordinates = { type: "Point", coordinates: coordinates.coordinates.coordinates };
          break;
        case "LINESTRING":
          // Assuming coordinates is an array of [lng, lat] pairs
          geomCoordinates = { type: "LineString", coordinates: coordinates.coordinates.coordinates };
          break;
        case "POLYGON":
          // Assuming coordinates is an array of rings, each an array of [lng, lat] pairs
          geomCoordinates = { type: "Polygon", coordinates: coordinates.coordinates.coordinates };
          break;
        default:
          throw new Error("Invalid geometry type");
      }
      const resultGeometry = await Geometry.create(geometry);
      if (!resultGeometry) {
        return null;
      }
      return resultGeometry;
    } catch (error) {
      return null;
    }
  }

  async getAllGeometries() {
    try {
      const geometries = await Geometry.findAll();
      return geometries;
    } catch (error) {
      return null;
    }
  }

  async getGeometryByLayerId(id) {
    try {
      const geometries = await Geometry.findAll({ where: { layerId: id } });
      return geometries;
    } catch (error) {
      return null;
    }
  }

  async deleteGeometry(id) {
    try {
      const deletedGeometry = await Geometry.destroy({ where: { id } });
      if (!deletedGeometry) {
        return null;
      }
      return deletedGeometry;
    } catch (error) {
      return null;
    }
  }

  async getAttributeValuesByGeometryId(id) {
    try {
      const attributeValues = await AttributeValue.findAll({
        where: { geometryId: id },
      });

      return attributeValues;
    } catch (error) {
      return null;
    }
  }
}

module.exports = new GeometryRepository();
