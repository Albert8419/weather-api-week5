import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import aqiWidgetRoutes from './routes/aqiWidgetRoutes'; // Updated import path

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable all CORS requests
app.use(helmet()); // Helps secure your Express apps by setting various HTTP headers
app.use(morgan('combined')); // Log HTTP requests
app.use(express.json()); // Built-in middleware for parsing JSON

// Define the route to handle GET requests for AQI widget data
app.use('/api/v1/aqi-widget', aqiWidgetRoutes);

// Global error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); // Correctly accessing 'stack' property on Error type
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
