const GeometryRepository = require("../repositories/geometry.repository");
const AttributeValueRepository = require("../repositories/attributeValue.repository");

class GeometryService {

  async createGeometry(geometryData, attributeValues) {
    const createdGeometry = await GeometryRepository.createGeometry(geometryData);

    if (createdGeometry && attributeValues.length > 0) {
      const attributeValueData = attributeValues.map((value) => ({
        geometryId: createdGeometry.id,
        attributeTypeId: value.attributeTypeId,
        value: value.value,
      }));

      await AttributeValueRepository.createAttributeValues(attributeValueData);
    }

    return createdGeometry;
  }

  async getAllGeometries() {
    const geometries = await GeometryRepository.getAllGeometries();
    return geometries;
  }

  async getGeometryByLayerId(id) {
    const geometries = await GeometryRepository.getGeometryByLayerId(id);
    return geometries;
  }

  async deleteGeometry(id) {
    const deletedGeometry = await GeometryRepository.deleteGeometry(id);
    return deletedGeometry;
  }

  async getAttributeValuesByGeometryId(id) {
    const attributeValues = await GeometryRepository.getAttributeValuesByGeometryId(id);
    return attributeValues;
  }

}

module.exports = new GeometryService();
