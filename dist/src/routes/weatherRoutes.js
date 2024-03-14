import express from 'express';
import { getWeatherData } from '../controllers/weatherController.js';
import { validateCityName } from '../middleware/validators.ts';
const router = express.Router();
router.get('/:city', validateCityName, getWeatherData);
export default router;
//# sourceMappingURL=weatherRoutes.js.map