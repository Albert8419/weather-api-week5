import express from 'express';
import { getGasPrices } from '../controllers/gasPriceController';
import { validateCity } from '../middleware/validators'; // Make sure this path is correct

const router = express.Router();

// Apply the validateCity middleware to the route to validate the 'city' parameter
router.get('/gas-prices/:city', validateCity, getGasPrices);

export default router;
