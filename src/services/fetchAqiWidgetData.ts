import axios, { AxiosError } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const AQI_WIDGET_API_KEY = process.env.AQI_WIDGET_API_KEY;
const API_URL = 'https://feed.aqicn.org/feed';

export const fetchAqiWidgetData = async (city: string) => {
    try {
        const response = await axios.get(`${API_URL}/${city}/en/feed.v1.js`, {
            headers: {
                'x-rapidapi-host': 'feed.aqicn.org',
                'x-rapidapi-key': AQI_WIDGET_API_KEY
            }
        });
        const data = response.data;
        return data; // Confirm the structure of this data matches what your application expects
    } catch (error) {
        console.error('Failed to fetch AQI widget data:', error);

        // Handle Axios errors
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;

            if (axiosError.response) {
                console.error('API response error:', axiosError.response.status, axiosError.response.data);
            } else if (axiosError.request) {
                console.error('Request made but no response received:', axiosError.request);
            } else {
                console.error('Error setting up request:', axiosError.message);
            }
        } else {
            console.error('An unexpected error occurred');
        }
        throw new Error('Failed to fetch AQI widget data'); // Propagate the error to the caller with a descriptive message
    }
};
