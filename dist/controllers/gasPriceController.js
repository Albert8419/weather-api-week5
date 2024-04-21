"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGasPrices = void 0;
const tslib_1 = require("tslib");
const gasPriceService_1 = require("../services/gasPriceService");
const getGasPrices = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const city = req.params.city;
        const gasPrices = yield (0, gasPriceService_1.fetchGasPrices)(city);
        res.status(200).json(gasPrices);
    }
    catch (error) {
        console.error('Error fetching gas prices:', error);
        res.status(500).send('Error fetching gas prices');
    }
});
exports.getGasPrices = getGasPrices;
//# sourceMappingURL=gasPriceController.js.map