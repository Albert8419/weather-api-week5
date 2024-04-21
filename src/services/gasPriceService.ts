import axios, { AxiosError } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const YOUR_API_KEY = process.env.GAS_PRICES_API_KEY; // Changed to a more specific environment variable name
const API_URL = 'https://gas-price.p.rapidapi.com/gasPrices'; // Ensure this is the correct endpoint

export const fetchGasPrices = async (city: string) => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'x-rapidapi-host': 'gas-price.p.rapidapi.com',
                'x-rapidapi-key': YOUR_API_KEY
            },
            params: { city }
        });
        const data = response.data;
        return data; // Confirm the structure of this data matches what your application expects
    } catch (error: unknown) {
        console.error('Failed to fetch gas prices:', error);
        if (axios.isAxiosError(error)) {
            // Now we can safely access error.response because we've asserted the error is an AxiosError
            if (error.response) {
                console.error('API response error:', error.response.status, error.response.data);
            }
        } else {
            // Error is not from Axios, handle or log appropriately
            console.error('An unexpected error occurred');
        }
        throw error; // Consider custom error handling or reformatting error messages
    }
};
