// gasPricesRoutes.ts
import express from 'express';
import { getGasPrices } from '../controllers/gasPriceController';

const router = express.Router();

router.get('/gas-prices/:city', getGasPrices);

export default router;
