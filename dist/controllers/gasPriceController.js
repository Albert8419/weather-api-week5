import { __awaiter } from "tslib";
import { validationResult } from 'express-validator';
import { fetchGasPrices } from '../services/gasPriceService';
export const getGasPrices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error('Validation error', errors.array());
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const gasPrices = yield fetchGasPrices(); // Fetch gas prices
        res.status(200).json({ gasPrices });
    }
    catch (error) {
        console.error('Error fetching gas prices:', error);
        res.status(500).send('Error fetching gas prices');
    }
});
//# sourceMappingURL=gasPriceController.js.map