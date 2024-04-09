const AttributeValue = require('../models/attributeValue');

class AttributeValueRepository {
  async createAttributeValues(attributeValues) {
    try {
      const createdAttributeValues = await AttributeValue.bulkCreate(attributeValues);
      return createdAttributeValues;
    } catch (error) {
      throw new Error('Failed to create attribute values');
    }
  }
}

module.exports = new AttributeValueRepository();