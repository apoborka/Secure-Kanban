const forceDatabaseRefresh = false;

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';

// Define __dirname for ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the client's dist folder
app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use(express.json());
app.use(routes);

// Catch-all route to serve the frontend for unknown routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// Sync database and start the server
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});