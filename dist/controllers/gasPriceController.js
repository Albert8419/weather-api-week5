"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGasPrices = void 0;
const tslib_1 = require("tslib");
const gasPriceService_1 = require("../services/gasPriceService");
const getGasPrices = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate input data
        const city = req.params.city;
        if (!city) {
            return res.status(400).json({ error: 'City parameter is missing' });
        }
        // Fetch gas prices
        const gasPrices = yield (0, gasPriceService_1.fetchGasPrices)(city);
        // Check if gasPrices is empty or undefined
        if (!gasPrices) {
            return res.status(404).json({ error: 'Gas prices not found for the specified city' });
        }
        // Return gas prices
        return res.status(200).json(gasPrices);
    }
    catch (error) {
        // Handle errors
        console.error('Error fetching gas prices:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getGasPrices = getGasPrices;
//# sourceMappingURL=gasPriceController.js.map