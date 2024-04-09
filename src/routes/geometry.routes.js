const express = require('express');
const GeometryController = require('../controllers/geometry.controller');
const router = express.Router();

router.post('/', GeometryController.createGeometry);
router.get('/', GeometryController.getAllGeometries);
router.get('/:id/attribute-values', GeometryController.getAttributeValuesByGeometryId);
router.delete('/:id', GeometryController.deleteGeometry);

module.exports = router;