// In gasPriceController.ts
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { fetchGasPrices } from '../services/gasPriceService.js';

export const getGasPrices = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error('Validation error', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const gasPrices = await fetchGasPrices(); // Fetch gas prices
    res.status(200).json({ gasPrices });
  } catch (error) {
    console.error('Error fetching gas prices:', error);
    res.status(500).send('Error fetching gas prices');
  }
};
