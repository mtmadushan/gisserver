const express = require('express');
const router = express.Router();

// Import controller modules
const healthCheckController = require('../controllers/healthchck.controller');
const projectRoutes = require('./project.routes');
const layerRoutes = require('./layer.routes')
const userRoutes = require('./user.routes');
const geometryRoutes = require('./geometry.routes');

// Health Check routes
router.get('/health-check', healthCheckController.healthCheck);

router.use('/projects', projectRoutes);
router.use('/layers', layerRoutes);
router.use('/users', userRoutes);
router.use('/geometries', geometryRoutes);

// Add more root controllers and their subcontrollers as needed

module.exports = router;