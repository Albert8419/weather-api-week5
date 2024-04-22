// Import necessary modules
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import aqiWidgetRoutes from './routes/aqiWidgetRoutes';

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('combined'));

// Routes
app.use('/api/v1/aqi-widget', aqiWidgetRoutes);

// Root endpoint handler
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running successfully.');
});

// Global error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
