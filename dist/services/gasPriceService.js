"use strict";
// gasPriceService.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchGasPrices = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
const YOUR_API_KEY = process.env.RAPIDAPI_KEY; // Ensure you set this in your .env file
const API_URL = 'https://gas-price.p.rapidapi.com/gasPrices'; // RapidAPI Gas Price API endpoint
const fetchGasPrices = (city) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(API_URL, {
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'gas-price.p.rapidapi.com',
                'x-rapidapi-key': YOUR_API_KEY
            },
            params: { city }
        });
        const data = response.data;
        return data; // Adjust this based on the response structure of the API
    }
    catch (error) {
        console.error('Failed to fetch gas prices:', error);
        throw error;
    }
});
exports.fetchGasPrices = fetchGasPrices;
//# sourceMappingURL=gasPriceService.js.map