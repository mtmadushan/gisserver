const LayerRepository = require('../repositories/layer.repository');
const AttributeTypeRepository = require('../repositories/attributeType.repository');

class layerService {
    async getAllLayers(page, limit) {
        const layers = await LayerRepository.getAllLayers(page, limit);
        return layers;
    }

    async getLayerById(id) {
        const layer = await LayerRepository.getLayerById(id);
        if (layer) {
            return layer;
        }
        return null;
    }

    async createLayer(layer, attributeTypes) {
        const createdLayer = await LayerRepository.createLayer(layer);
        if (createdLayer) {
            const createdAttributeTypes = await AttributeTypeRepository.createAttributeTypes(
                attributeTypes,
                createdLayer.id
            );
            createdLayer.attributeTypes = createdAttributeTypes;
        }
        return createdLayer;
    }

    async updateLayer(id, layer) {
        const updatedLayer = await LayerRepository.updateLayer(id, layer);
        if (updatedLayer) {
            return updatedLayer;
        }
        return null;
    }

    async deleteLayer(id) {
        return LayerRepository.deleteLayer(id);
    }

    async getAttributeTypesByLayerId(layerId) {
        const attributeTypes = await AttributeTypeRepository.getAttributeTypesByLayerId(layerId);
        return attributeTypes;
    }
}

module.exports = new layerService();