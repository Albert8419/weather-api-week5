import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.COLLECTAPI_KEY; // Ensure you set this in your .env file
const API_URL = 'https://api.collectapi.com/gasPrice/gas-prices-api'; // Updated API URL

/**
 * Fetches gas prices for the specified city from the API.
 * @param city The city for which to fetch gas prices.
 * @returns An object containing gas prices for different fuel types.
 * @throws Error if fetching gas prices fails.
 */
export const fetchGasPrices = async (city: string) => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'content-type': 'application/json',
                'authorization': `apikey ${API_KEY}`
            },
            params: { city } // Add city parameter to request
        });
        const data = response.data.result;
        return {
            regular: data.regular,
            midGrade: data.midGrade,
            premium: data.premium,
            diesel: data.diesel
        };
    } catch (error) {
        console.error('Failed to fetch gas prices:', error);
        throw error;
    }
};
