import express, { Request, Response } from 'express';
import { getAqiWidgetData } from '../controllers/aqiWidgetController';
import { validateCity } from '../middleware/validators.js';

const router = express.Router();

router.get('/aqi-widget/:city', validateCity, async (req: Request, res: Response) => {
    try {
        const city = req.params?.city;
        if (!city) {
            return res.status(400).json({ error: 'City parameter is missing' });
        }

        // Call the controller function to get the response
        const aqiWidgetResponse = await getAqiWidgetData(req, res, city);

        if (aqiWidgetResponse) {
            return res.status(200).json(aqiWidgetResponse);
        } else {
            return res.status(404).json({ error: 'Air quality data not found' });
        }
    } catch (error) {
        console.error('Error fetching air quality data:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
