import express from 'express';
import { getAqiWidgetData } from '../controllers/aqiWidgetController'; // Correct relative path
import { validateCity } from '../middleware/validators'; // Correct relative path

const router = express.Router();

// Apply the validateCity middleware to the route to validate the 'city' parameter
router.get('/aqi-widget/:city', validateCity, getAqiWidgetData);

export default router;
