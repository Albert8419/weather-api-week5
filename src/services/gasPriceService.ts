// gasPriceService.ts

import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY; // Ensure you set this in your .env file
const API_URL = 'https://gas-price.p.rapidapi.com/gasPrices'; // RapidAPI Gas Price API endpoint

export const fetchGasPrices = async (city: string) => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'gas-price.p.rapidapi.com',
                'x-rapidapi-key': RAPIDAPI_KEY
            },
            params: { city }
        });
        const data = response.data;
        return data; // Adjust this based on the response structure of the API
    } catch (error) {
        console.error('Failed to fetch gas prices:', error);
        throw error;
    }
};
