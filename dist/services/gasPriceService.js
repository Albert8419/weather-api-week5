"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchGasPrices = void 0;
const tslib_1 = require("tslib");
// gasPriceService.ts
const axios_1 = tslib_1.__importDefault(require("axios"));
const API_KEY = process.env.COLLECTAPI_KEY;
const API_URL = 'https://api.collectapi.com/gasPrice/fromCity';
const fetchGasPrices = (city) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(API_URL, {
            params: {
                city: city
            },
            headers: {
                'Authorization': `apikey ${API_KEY}`
            }
        });
        return response.data;
    }
    catch (error) {
        console.error('Failed to fetch gas prices:', error);
        throw error;
    }
});
exports.fetchGasPrices = fetchGasPrices;
//# sourceMappingURL=gasPriceService.js.map