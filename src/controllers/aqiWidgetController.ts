import { Request, Response } from 'express';
import { getAqiWidgetAxiosClient } from '../config/config.js'; // Correct relative path

export const getAqiWidgetData = async (req: Request, res: Response, city: string) => {
    try {
        const city = req.params.city;
        if (!city) {
            return res.status(400).json({ error: 'City parameter is missing' });
        }

        const language = req.query.lang || 'en'; // Get language from query parameter or default to English

        const axiosInstance = getAqiWidgetAxiosClient(); // Use the Axios instance configured for AQI widget API.

        const response = await axiosInstance.get(`/feed/${city}/${language}/feed.v1.js`);
        const aqiWidgetData = response.data;
        return res.status(200).send(aqiWidgetData);
    } catch (error) {
        console.error('Error fetching AQI widget data:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
