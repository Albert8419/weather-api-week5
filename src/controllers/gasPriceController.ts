// gasPriceController.ts
import { Request, Response } from 'express';
import { fetchGasPrices } from '../services/gasPriceService';

export const getGasPrices = async (req: Request, res: Response) => {
    try {
        const city = req.params.city;
        const gasPrices = await fetchGasPrices(city);
        res.status(200).json(gasPrices);
    } catch (error) {
        console.error('Error fetching gas prices:', error);
        res.status(500).send('Error fetching gas prices');
    }
};

