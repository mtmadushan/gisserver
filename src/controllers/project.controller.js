const ProjectService = require('../services/project.service');

class ProjectController {
    async getAllProjects(req, res) {
        try {
            const { page, limit } = req.query;
            const projects = await ProjectService.getAllProjects(page, limit);
            res.json(projects);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getProjectById(req, res) {
        const id = parseInt(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: 'Invalid project ID' });
        try {
            const project = await ProjectService.getProjectById(id);
            if (!project) return res.status(404).json({ error: 'Project not found' });
            res.json(project);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async createProject(req, res) {
        const projectData = req.body;
        try {
            const createdProject = await ProjectService.createProject(projectData);
            return res.status(201).json(createdProject);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async updateProject(req, res) {
        const { id } = req.params.id;
        const projectData = req.body;
        try {
            const updatedProject = await ProjectService.updateProject(id, projectData);
            if (!updatedProject) {
                return res.status(404).json({ error: 'Project not found' });
            }
            res.json(updatedProject);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async deleteProject(req, res) {
        try {
            const { id } = req.params.id;
            const deletedProject = await ProjectService.deleteProject(id);
            if (!deletedProject) {
                return res.status(404).json({ error: 'Project not found' });
            }
            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getLayersByProjectId(req, res) {
        try {
            const { page, limit } = req.query;
            const id = parseInt(req.params.id);
            const layers = await ProjectService.getLayersByProjectId(id, page, limit);
            res.json(layers);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = new ProjectController();