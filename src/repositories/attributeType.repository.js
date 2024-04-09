const AttributeType = require('../models/attributeType');

class AttributeTypeRepository {
  async createAttributeTypes(attributeTypes, layerId) {
    const createdAttributeTypes = await AttributeType.bulkCreate(
      attributeTypes.map((attributeType) => ({
        ...attributeType,
        layerId,
      }))
    );
    return createdAttributeTypes;
  }

  async getAttributeTypesByLayerId(layerId) {
    const attributeTypes = await AttributeType.findAll({
      where: {
        layerId,
      },
    });
    return attributeTypes;
  }
}

module.exports = new AttributeTypeRepository();