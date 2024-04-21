"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGasPrices = void 0;
const tslib_1 = require("tslib");
const express_validator_1 = require("express-validator");
const gasPriceService_1 = require("../services/gasPriceService");
const getGasPrices = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            console.error('Validation error', errors.array());
            return res.status(400).json({ errors: errors.array() });
        }
        const city = req.params.city; // Extract city from request parameters
        const gasPrices = yield (0, gasPriceService_1.fetchGasPrices)(city); // Pass city to fetchGasPrices
        return res.status(200).json({ gasPrices });
    }
    catch (error) {
        console.error('Error fetching gas prices:', error);
        return res.status(500).send('Error fetching gas prices');
    }
});
exports.getGasPrices = getGasPrices;
//# sourceMappingURL=gasPriceController.js.map