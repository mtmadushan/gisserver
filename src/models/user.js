const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

class User extends Model { }

User.init({
    FirstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UserType: {
        type: DataTypes.ENUM('ADMIN', 'USER','DATA_PROVIDER'),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User'
});

module.exports = User;