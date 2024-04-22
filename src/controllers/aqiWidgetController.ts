import { Request, Response } from 'express';
import { getAqiWidgetAxiosClient } from '../config/config.js';

export const getAqiWidgetData = async (city: string) => {
    try {
        if (!city) {
            throw new Error('City parameter is required');
        }

        const language = 'en'; // Default language

        const axiosInstance = getAqiWidgetAxiosClient();
        const response = await axiosInstance.get(`/feed/${city}/${language}/feed.v1.js`);
        const aqiWidgetData = response.data;
        return aqiWidgetData;
    } catch (error) {
        console.error('Error fetching AQI widget data:', error);
        throw error;
    }
};
