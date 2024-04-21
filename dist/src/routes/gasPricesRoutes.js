import express from 'express';
import { getGasPrices } from '../controllers/gasPriceController.js';
import { validateApiKey, validateParameter } from '../validators.js';
const router = express.Router();
// Route for fetching gas prices with optional parameters validation
router.get('/gas-prices', [validateApiKey, validateParameter], getGasPrices);
export default router;
//# sourceMappingURL=gasPricesRoutes.js.map