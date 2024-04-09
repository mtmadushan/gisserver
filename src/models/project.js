const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

class Project extends Model { }

Project.init({
    projectName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: DataTypes.TEXT,
    mapType: {
        type: DataTypes.ENUM('OPEN_STREET_MAP'),
        allowNull: false
    },
    projectionMethod: {
        type: DataTypes.ENUM('WGS84', 'SLD99'),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Project'
});

module.exports = Project;