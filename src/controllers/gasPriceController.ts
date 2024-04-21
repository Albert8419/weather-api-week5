// gasPriceController.ts
import { Request, Response } from 'express';
import axios from 'axios';
import { getGasApiAxiosClient } from '../config/config.js'; // Correct relative path

export const getGasPrices = async (req: Request, res: Response) => {
    try {
        const city = req.params.city;
        if (!city) {
            return res.status(400).json({ error: 'City parameter is missing' });
        }

        const axiosInstance = getGasApiAxiosClient(); // Use the Axios instance configured with the API key and host.

        const response = await axiosInstance.get(`/europeanCountries?city=${city}`);
        const gasPrices = response.data;
        return res.status(200).json(gasPrices);
    } catch (error) {
        console.error('Error fetching gas prices:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
