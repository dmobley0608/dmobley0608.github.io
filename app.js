import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import net from 'net';
import dotenv from 'dotenv';
import SparkPost from 'sparkpost';
import bodyParser from 'body-parser';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Initialize SparkPost client
const sparkpostClient = new SparkPost(process.env.SPARKPOST_API_KEY);

const app = express();
const START_PORT = process.env.PORT || 3001;
const MAX_PORT = START_PORT + 999;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configure CORS
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:3000', 'https://dwight-mobley.com'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// Parse application/json and application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
const publicPath = path.join(__dirname, 'public');
console.log(`Serving static files from ${publicPath}`);
app.use(express.static(publicPath));

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Email route using SparkPost
app.post('/api/send-email', async (req, res) => {
  try {
    console.log('Received email request:', req.body);
    const { name, email, subject, message } = req.body;

    // Validate inputs
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message'
      });
    }

    // Prepare email content
    const emailContent = {
      content: {
        from: {
          name: process.env.FROM_NAME ,
          email: process.env.FROM_EMAIL
        },
        subject: subject || 'New message from Portfolio Contact Form',
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      },
      recipients: [
        { address:  process.env.ADMIN_EMAIL }
      ],
      // Add a reply-to header so you can reply directly to the sender
      headers: {
        "Reply-To": email
      }
    };

    // Send email
    const transmission = await sparkpostClient.transmissions.send(emailContent);
    res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message
    });
  }
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
