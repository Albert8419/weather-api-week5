import express, { Request, Response } from 'express';
import { getAqiWidgetData } from '../controllers/aqiWidgetController';
import { validateCity } from '../middleware/validators.js';

const router = express.Router();

router.get('/aqi-widget/:city', validateCity, async (req: Request, res: Response) => {
    try {
        const city = req.params.city; // No need for optional chaining as params is always defined
        // No need to check for !city here because the validateCity middleware already ensures the city parameter is present and valid

        // Call the controller function to get the response
        const aqiWidgetResponse = await getAqiWidgetData(city);

        if (aqiWidgetResponse) {
            return res.status(200).json(aqiWidgetResponse);
        } else {
            return res.status(404).json({ error: 'Air quality data not found for the specified city' });
        }
    } catch (error) {
        console.error('Error fetching air quality data:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
