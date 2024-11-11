import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import contactRoutes from './routes/contact.route.js'; 
import packageRoutes from './routes/package.route.js';
import bookingRoutes from './routes/bookingroute.js';
import './mongooseConection/connection.js'; // Ensure this points to your DB connection logic
import signup from './routes/signup.route.js';
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors());  // Enable CORS for all routes

// Define the uploads directory
const uploadDir = path.join(process.cwd(), 'uploads');

// Check if the uploads directory exists, if not create it
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(uploadDir)); // Change to serve from /uploads

// Use routes
app.use('/contact', contactRoutes);  // Base route for all contact-related endpoints
app.use('/package/api', packageRoutes); // Base route for package-related endpoints
app.use('/api',bookingRoutes); // Base route for all booking routes for
app.use('/api/account',signup );
// Error handling for unhandled routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' }); // Send JSON response for consistency
});

// Global error handler for unexpected errors
app.use((err, req, res, next) => {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: 'An unexpected error occurred' }); // Send generic error message
});

// Server initialization
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
