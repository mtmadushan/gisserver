const express = require('express');
const ProjectController = require('../controllers/project.controller');
const router = express.Router();

router.get('/', ProjectController.getAllProjects);
router.get('/:id', ProjectController.getProjectById);
router.post('/', ProjectController.createProject);
router.put('/:id', ProjectController.updateProject);
router.delete('/:id', ProjectController.deleteProject);
router.get('/:id/layers', ProjectController.getLayersByProjectId)

module.exports = router;