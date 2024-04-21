import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { fetchGasPrices } from '../services/gasPriceService';

export const getGasPrices = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.error('Validation error', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const city = req.params.city;
    if (!city) {
      return res.status(400).json({ error: 'City parameter is missing' });
    }

    const gasPrices = await fetchGasPrices(city);
    return res.status(200).json({ gasPrices });
  } catch (error) {
    console.error('Error fetching gas prices:', error);
    return res.status(500).send('Error fetching gas prices');
  }
};

