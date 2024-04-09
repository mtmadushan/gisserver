const Layer = require('../models/layer');

class LayerRepository {
    async getAllLayers(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        return Layer.findAll({ offset, limit });
    }

    async getLayerById(id) {
        const layer = await Layer.findByPk(id);

        if (!layer) {
            res.status(404).json({ error: 'Layer not found' });
        }
        return layer;
    }

    async createLayer(layer) {
        const resultLayer = await Layer.create(layer);
        if (!resultLayer) {
            return null;
        }
        return resultLayer;
    }

    async updateLayer(id, layer) {
        const existingLayer = await Layer.findByPk(id);
        if (!existingLayer) {
            return null;
        }
        const updatedLayer = await existingLayer.update(layer);
        return updatedLayer;
    }

    async deleteLayer(id) {
        const layer = await Layer.findByPk(id);
        if (!layer) {
            return null;
        }
        await layer.destroy();
        return layer;
    }
}

module.exports = new LayerRepository();