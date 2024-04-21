import express from 'express';
import { getGasPrices } from '../controllers/gasPriceController';
import { validateApiKey, validateParameter } from '../middleware/validators';

const router = express.Router();

/**
 * Route for fetching gas prices with optional parameters validation.
 * Validates API key and gas price parameter.
 */
router.get('/gas-prices/:city', [validateApiKey, validateParameter], async (req, res) => {
  try {
    // Call the controller function to handle the request
    await getGasPrices(req, res);
  } catch (error) {
    console.error('Error in gas prices route:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;

