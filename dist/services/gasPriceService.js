"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchGasPrices = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
const YOUR_API_KEY = process.env.GAS_PRICES_API_KEY; // Changed to a more specific environment variable name
const API_URL = 'https://gas-price.p.rapidapi.com/gasPrices'; // Ensure this is the correct endpoint
const fetchGasPrices = (city) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(API_URL, {
            headers: {
                'x-rapidapi-host': 'gas-price.p.rapidapi.com',
                'x-rapidapi-key': YOUR_API_KEY
            },
            params: { city }
        });
        const data = response.data;
        return data; // Confirm the structure of this data matches what your application expects
    }
    catch (error) {
        console.error('Failed to fetch gas prices:', error);
        if (error.response) {
            // Handle HTTP-specific errors here
            console.error('API response error:', error.response.status, error.response.data);
        }
        throw error; // Consider custom error handling or reformatting error messages
    }
});
exports.fetchGasPrices = fetchGasPrices;
//# sourceMappingURL=gasPriceService.js.map