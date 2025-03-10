import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import net from 'net';

const app = express();
const START_PORT = process.env.PORT || 3001;
const MAX_PORT = START_PORT + 999;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'public' folder
const publicPath = path.join(__dirname, 'public');
console.log(`Serving static files from ${publicPath}`);
app.use(express.static(publicPath));

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Function to check if a port is available
const isPortAvailable = (port) => {
  return new Promise((resolve) => {
    const server = net.createServer()
      .once('error', () => resolve(false))
      .once('listening', () => {
        server.close();
        resolve(true);
      })
      .listen(port);
  });
};

// Function to find the next available port
const findAvailablePort = async (startPort) => {
  let port = startPort;
  while (port <= MAX_PORT) {
    if (await isPortAvailable(port)) {
      return port;
    }
    port++;
  }
  throw new Error(`No available ports found between ${START_PORT} and ${MAX_PORT}`);
};

// Start the server with port scanning
const startServer = async () => {
  try {
    const port = await findAvailablePort(START_PORT);
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Error starting the server:', err);
    process.exit(1);
  }
};

startServer();
