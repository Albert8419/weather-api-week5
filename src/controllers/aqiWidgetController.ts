import { Request, Response } from 'express';
import { getAqiWidgetAxiosClient } from '../config/config.js'; // Correct relative path

export const getAqiWidgetData = async (city: string) => {
    try {
        if (!city) {
            return null; // Return null instead of responding with an error directly
        }

        const language = 'en'; // Get language from query parameter or default to English

        const axiosInstance = getAqiWidgetAxiosClient(); // Use the Axios instance configured for AQI widget API.

        const response = await axiosInstance.get(`/feed/${city}/${language}/feed.v1.js`);
        const aqiWidgetData = response.data;
        return aqiWidgetData;
    } catch (error) {
        console.error('Error fetching AQI widget data:', error);
        throw error; // Propagate the error to the caller
    }
};
