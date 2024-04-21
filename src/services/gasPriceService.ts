// In gasPricesService.ts
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.COLLECTAPI_KEY; // Ensure you set this in your .env file
const API_URL = 'https://api.collectapi.com/gasPrice/gas-prices-api'; // Updated API URL

export const fetchGasPrices = async (city: string) => { // Modify function to accept city parameter
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
