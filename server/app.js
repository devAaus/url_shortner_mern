import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from "./src/config/db.config.js"
import urlRoutes from "./src/routes/url.route.js";
import { redirectShortUrl } from './src/controllers/url.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';

const app = express();

app.use(cors({
   origin: 'http://localhost:5173',
   credentials: true
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/create", urlRoutes);
app.get("/:id", redirectShortUrl)

app.use(errorHandler);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
   connectDB();
   console.log(`Server is running on port ${port}`);
});
