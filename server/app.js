import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from "./src/config/db.config.js"

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.send('Welcome to the URL Shortener API');
});


const port = process.env.PORT || 3000;
// Start the server
app.listen(port, () => {
   connectDB();
   console.log(`Server is running on port ${port}`);
});
