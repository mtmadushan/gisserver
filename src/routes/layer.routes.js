const express = require('express');
const LayerController = require('../controllers/layer.controller');
const GeometryController = require('../controllers/geometry.controller');
const router = express.Router();

router.get('/', LayerController.getAllLayers);
router.get('/:id', LayerController.getLayerById);
router.post('/', LayerController.createLayer);
router.put('/:id', LayerController.updateLayer);
router.delete('/:id', LayerController.deleteLayer);

router.get('/:id/attribute-types', LayerController.getAttributeTypesByLayerId);
router.get('/:id/geometries', GeometryController.getGeometryByLayerId);

module.exports = router;