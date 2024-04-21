"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGasPrices = void 0;
const express_validator_1 = require("express-validator");
const gasPriceService_js_1 = require("../services/gasPriceService.js");
const getGasPrices = async (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        console.error('Validation error', errors.array());
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const gasPrices = await (0, gasPriceService_js_1.fetchGasPrices)(); // Fetch gas prices
        res.status(200).json({ gasPrices });
    }
    catch (error) {
        console.error('Error fetching gas prices:', error);
        res.status(500).send('Error fetching gas prices');
    }
};
exports.getGasPrices = getGasPrices;
//# sourceMappingURL=gasPriceController.js.map