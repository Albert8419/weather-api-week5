import { Request, Response } from 'express';
import { fetchAqiWidgetData } from '../services/fetchAqiWidgetData';

export const getAqiWidgetData = async (city: string) => {
    try {
        if (!city) {
            throw new Error('City parameter is required');
        }

        // Call the function to fetch AQI widget data from the external API
        const aqiWidgetData = await fetchAqiWidgetData(city);

        return aqiWidgetData;
    } catch (error) {
        console.error('Error fetching AQI widget data:', error);
        throw error;
    }
};
