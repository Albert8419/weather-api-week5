// gasPriceController.ts
import { Request, Response } from 'express';
import axios from 'axios';

export const getGasPrices = async (req: Request, res: Response) => {
    try {
        const city = req.params.city;
        if (!city) {
            return res.status(400).json({ error: 'City parameter is missing' });
        }

        const options = {
            method: 'GET',
            url: `https://gas-price.p.rapidapi.com/europeanCountries?city=${city}`,
            headers: {
                'X-RapidAPI-Key': 'YOUR_API_KEY',
                'X-RapidAPI-Host': 'gas-price.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        const gasPrices = response.data;
        return res.status(200).json(gasPrices);
    } catch (error) {
        console.error('Error fetching gas prices:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
