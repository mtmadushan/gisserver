const ProjectRepository = require('../repositories/project.repository');
const ProjectDto = require('../dto/project.dto');
const Project = require('../models/project');

class ProjectService {
    async getAllProjects(page, limit) {
        const projects = await ProjectRepository.getAllProjects(page, limit);
        return projects;
    }

    async getProjectById(id) {
        const project = await ProjectRepository.getProjectById(id);
        if (project) {
            return project;
        }
        return null;
    }

    async createProject(project) {
        const createdProject = await ProjectRepository.createProject(project);
        return createdProject;
    }

    async updateProject(id, project) {
        const updatedProject = await ProjectRepository.updateProject(id, project);
        if (updatedProject) {
            return updatedProject;
        }
        return null;
    }

    async deleteProject(id) {
        return ProjectRepository.deleteProject(id);
    }

    async getLayersByProjectId(id, page, limit) {
        const layers = await ProjectRepository.getLayersByProjectId(id, page, limit);
        return layers;
    }
}

module.exports = new ProjectService();