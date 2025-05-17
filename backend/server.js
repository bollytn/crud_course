import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';

dotenv.config(); // Importing dotenv to load environment variables from .env file

const app = express(); // Initialize express app
const PORT = process.env.PORT || 5000; // Set the port to the value in .env or default to 5000

const __dirname = path.resolve(); // Get the current directory name

app.use(express.json()); // Allow us to parse JSON data in the request body

app.use("/api/products", productRoutes); // Mounting the productRoutes to the app

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('API is running...');
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on port', PORT);
});
