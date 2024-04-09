# GIS Backend

This project serves as the backend for a GIS (Geographic Information System) application, providing server-side functionality and API endpoints.

## Features

- **Express.js**: Handles HTTP requests and routing.
- **PostgreSQL with Sequelize ORM**: For database integration and model management.
- **dotenv**: Manages environment variables.
- **pg library**: Enables database connection pooling.
- **Sequelize Model**: Includes a model definition for the Project entity.
- **API Endpoints**: Features API routes including a health check for server monitoring.

## Prerequisites

- Node.js 18.17.1
- PostgreSQL version: 13 (with PostGIS extension 3.1)

## Getting Started

1. **Clone the repository:**
   ```
   git clone https://github.com/deonx88/gis-fusion.git
   ```
2. **Install dependencies:**
   ```
   cd gis-backend
   npm install
   ```

3. **Start the server:**
   ```
   npm start
   ```
   The server listens on port 3015 by default.

## Configuration

Customize the backend using the `.env` file. Available variables include `PORT`, `DB_USER`, `DB_HOST`, `DB_NAME`, `DB_PASSWORD`, `DB_PORT`, `DB_SCHEMA`, and `DB_FORCE_SYNC`.

## Database

The backend uses PostgreSQL and Sequelize ORM for operations. See `models/project.js` for the Project model. Add models as required.

## API Routes

Routes are defined in `routes.js`. Extend functionality by adding routes and controllers.

---
