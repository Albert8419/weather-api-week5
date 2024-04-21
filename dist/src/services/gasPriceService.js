import { __awaiter } from "tslib";
// In gasPricesService.ts
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const API_KEY = process.env.COLLECTAPI_KEY; // Ensure you set this in your .env file
const API_URL = 'https://api.collectapi.com/gasPrice/nationalAverage';
export const fetchGasPrices = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get(API_URL, {
            headers: {
                'content-type': 'application/json',
                'authorization': `apikey ${API_KEY}`
            }
        });
        const data = response.data.result; // Assuming 'result' contains the relevant gas price data
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
//# sourceMappingURL=gasPriceService.js.map