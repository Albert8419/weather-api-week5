// app.js or index.js
import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); // This loads the environment variables from the .env file into process.env

const app = express();

// Now you can safely use the API key loaded from .env
const apiKey = process.env.RAPIDAPI_KEY;

// Continue with your application setup
app.use(express.json());

// Define routes, middleware, etc., as usual
// ...

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
