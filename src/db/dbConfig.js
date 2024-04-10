const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'gis_application',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT || 5435,
});

module.exports = pool;