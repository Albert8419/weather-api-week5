// gasPriceService.ts
import axios from 'axios';

const API_KEY = process.env.COLLECTAPI_KEY;
const API_URL = 'https://api.collectapi.com/gasPrice/fromCity';

export const fetchGasPrices = async (city: string) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                city: city
            },
            headers: {
                'Authorization': `apikey ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch gas prices:', error);
        throw error;
    }
};
