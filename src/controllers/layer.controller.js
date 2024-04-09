const LayerService = require('../services/layer.service');
const ProjectService = require('../services/project.service')


class LayerController {
    async getAllLayers(req, res) {
        try {
            const { page, limit } = req.query;
            const layers = await LayerService.getAllLayers(page, limit);
            res.json(layers);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getLayerById(req, res) {
        const id = parseInt(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: 'Invalid layer ID' });
        try {
            const layer = await LayerService.getLayerById(id);
            if (!layer) return res.status(404).json({ error: 'Layer not found' });
            res.json(layer);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async createLayer(req, res) {
        const projectId = req.body.projectId;
        if (isNaN(projectId)) return res.status(400).json({ error: 'Invalid project ID' });
        const layerData = req.body;
        const attributeTypes = req.body.attributeTypes;

        try {
            const project = await ProjectService.getProjectById(projectId);
            if (!project) return res.status(404).json({ error: 'Project not found' });
            const createdLayer = await LayerService.createLayer(layerData, attributeTypes);
            return res.status(201).json(createdLayer);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async updateLayer(req, res) {
        const { id } = req.params;
        const layerData = req.body;
        try {
            const updatedLayer = await LayerService.updateLayer(id, layerData);
            if (!updatedLayer) {
                return res.status(404).json({ error: 'Layer not found' });
            }
            res.json(updatedLayer);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async deleteLayer(req, res) {
        try {
            const { id } = req.params;
            const deletedLayer = await LayerService.deleteLayer(id);
            if (!deletedLayer) {
                return res.status(404).json({ error: 'Layer not found' });
            }
            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getAttributeTypesByLayerId(req, res) {
        const layerId = parseInt(req.params.id);
        if (isNaN(layerId)) return res.status(400).json({ error: 'Invalid layer ID' });

        try {
            const attributeTypes = await LayerService.getAttributeTypesByLayerId(layerId);
            res.json(attributeTypes);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = new LayerController();