import express from 'express';
import { getWeatherData } from './controllers/weatherController';
import { validateCity } from './validators';

const router = express.Router();

// Applying the validateCity middleware to the route that needs city validation
router.get('/weather/:city', validateCity, getWeatherData);

export default router;
