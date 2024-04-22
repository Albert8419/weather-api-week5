import express from 'express';
import { Request, Response } from 'express';
import axios from 'axios';
import { validateCity } from '../middleware/validators.js';

const router = express.Router();

router.get('/:city', validateCity, async (req: Request, res: Response) => {
    try {
        const city = req.params.city;
        const response = await axios.get(`https://api.waqi.info/feed/${city}/?token=e1e26600861c3e38c921da095baad05c07d509cd`);
        const aqiWidgetResponse = response.data;
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
