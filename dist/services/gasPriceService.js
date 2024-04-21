"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchGasPrices = void 0;
const tslib_1 = require("tslib");
// In gasPricesService.ts
const axios_1 = tslib_1.__importDefault(require("axios"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
const API_KEY = process.env.COLLECTAPI_KEY; // Ensure you set this in your .env file
const API_URL = 'https://api.collectapi.com/gasPrice/gas-prices-api'; // Updated API URL
const fetchGasPrices = (city) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(API_URL, {
            headers: {
                'content-type': 'application/json',
                'authorization': `apikey ${API_KEY}`
            },
            params: { city } // Add city parameter to request
        });
        const data = response.data.result;
        return {
            regular: data.regular,
            midGrade: data.midGrade,
            premium: data.premium,
            diesel: data.diesel
        };
    }
    catch (error) {
        console.error('Failed to fetch gas prices:', error);
        throw error;
    }
});
exports.fetchGasPrices = fetchGasPrices;
//# sourceMappingURL=gasPriceService.js.map