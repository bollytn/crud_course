import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRoutes from './routes/product.route.js';

dotenv.config(); // Importing dotenv to load environment variables from .env file

const app = express(); // Initialize express app
const PORT = process.env.PORT || 5000; // Set the port to the value in .env or default to 5000

app.use(express.json()); // Allow us to parse JSON data in the request body

app.use("/api/products", productRoutes); // Mounting the productRoutes to the app

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on port', PORT);
});
