import express from 'express';
import { getWeatherData } from '../controllers/weatherController.js';
import { validateCityName } from '../middleware/validators.js';

const router = express.Router();

router.get('/:city', validateCityName, getWeatherData);

export default router;
