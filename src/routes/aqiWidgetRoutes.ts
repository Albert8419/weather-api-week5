import express from 'express';
import { getAqiWidgetData } from '../controllers/aqiWidgetController'; // Correct relative path
import { validateCity } from '../middleware/validators'; // Correct relative path
import axios from 'axios';

const router = express.Router();
const WAQI_API_TOKEN = 'e1e26600861c3e38c921da095baad05c07d509cd'; // Your WAQI API token

// Route to fetch air quality data for a specific city from the local API
router.get('/aqi-widget/:city', validateCity, getAqiWidgetData);

// Route to fetch air quality data for a specific city from the WAQI API
router.get('/aqi-widget-data/:city', async (req, res) => {
    try {
        const city = req.params.city;
        const url = `https://api.waqi.info/feed/${city}/?token=${WAQI_API_TOKEN}`;
        const response = await axios.get(url);
        
        // Extract air quality data from the response
        const { status, data } = response;
        if (status === 200 && data && data.data && data.data.aqi) {
            const aqi = data.data.aqi;
            const details = data.data.iaqi;
            const aqiData = {
                city,
                aqi,
                details
            };
            return res.status(200).json(aqiData);
        } else {
            return res.status(404).json({ error: 'Air quality data not found' });
        }
    } catch (error) {
        console.error('Error fetching air quality data:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
