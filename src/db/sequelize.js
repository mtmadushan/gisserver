const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('postgres://db_user:userpassword@localhost:5432/gis_application');

module.exports = sequelize;
