import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import gasPricesRoutes from './routes/gasPricesRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000; // Use an environment variable for the port

app.use(cors()); // Enable all CORS requests
app.use(helmet()); // Helps secure your Express apps by setting various HTTP headers
app.use(morgan('combined')); // Log HTTP requests
app.use(express.json()); // Built-in middleware for parsing JSON

// Define the route to handle GET requests for gas prices
app.use('/api/v1/gas-prices', gasPricesRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
