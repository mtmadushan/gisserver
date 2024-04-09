const Project = require('../models/project');
const Layer = require('../models/layer')

class ProjectRepository {
    async getAllProjects(page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        return Project.findAll({ offset, limit });
    }

    async getProjectById(id) {
        const project = await Project.findByPk(id);

        if (!project) {
            res.status(404).json({ error: 'Project not found' });
        }
        return project;
    }

    async createProject(project) {
        const resultProject = await Project.create(project);
        if (!resultProject) {
            return null;
        }
        return resultProject;
    }

    async updateProject(id, project) {
        const existingProject = await Project.findByPk(id);
        if (!existingProject) {
            return null;
        }
        const updatedProject = await existingProject.update(project);
        return updatedProject;
    }

    async deleteProject(id) {
        const project = await Project.findByPk(id);
        if (!project) {
            return null;
        }
        await project.destroy();
        return project;
    }

    async getLayersByProjectId(id, page = 1, limit = 10) {
        const project = await Project.findByPk(id);
        if (!project) {
            res.status(404).json({ error: 'Project not found' });
        }
        const layers = await Layer.findAll({
            where: { projectId: id },
            offset: (page - 1) * limit,
            limit: limit
        });
        return layers;
    }
}

module.exports = new ProjectRepository();