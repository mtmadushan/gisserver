const express = require('express');
const pool = require('./db/dbConfig'); // Assuming this path is correct and exports a `pool`
const sequelize = require('./db/sequelize');
const routes = require('./routes/index');
const Project = require('./models/project');
const User = require('./models/user');
const Geometry = require('./models/geometries');
const Layer = require('./models/layer');
const cors = require('cors');

const app = express();
app.use(cors())
const port = process.env.PORT;

require('dotenv').config();

// Convert the environment variable to a boolean
const forceSync = process.env.DB_FORCE_SYNC === 'true';

app.use(express.json());

const checkSequelizeDbConnection = async () => {
    try {
        await sequelize.sync({ force: forceSync });
        console.log('Database synchronized with Sequelize');
    } catch (error) {
        console.error('Failed to synchronize database with Sequelize:', error);
        process.exit(1);
    }
};

// Function to check database connection
const checkDbConnection = async () => {
    try {
        await pool.query('SELECT NOW()'); // Simple query to check the connection
        console.log('Connected to the database successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit the process with an error code
    }
};

// Mount the routes
app.use('/', routes);

// Start the server and check database connection
const startServer = async () => {
    await checkSequelizeDbConnection();
    await checkDbConnection(); // Ensure DB connection is okay before starting the server

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

startServer();
