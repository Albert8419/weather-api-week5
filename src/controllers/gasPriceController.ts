import { Request, Response } from 'express';
import { fetchGasPrices } from '../services/gasPriceService';

export const getGasPrices = async (req: Request, res: Response) => {
    try {
        // Validate input data
        const city = req.params.city;
        if (!city) {
            return res.status(400).json({ error: 'City parameter is missing' });
        }

        // Fetch gas prices
        const gasPrices = await fetchGasPrices(city);
        
        // Check if gasPrices is empty or undefined
        if (!gasPrices) {
            return res.status(404).json({ error: 'Gas prices not found for the specified city' });
        }

        // Return gas prices
        res.status(200).json(gasPrices);
    } catch (error) {
        // Handle errors
        console.error('Error fetching gas prices:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
