"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGasPrices = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const getGasPrices = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const city = req.params.city;
        if (!city) {
            return res.status(400).json({ error: 'City parameter is missing' });
        }
        const options = {
            method: 'GET',
            url: `https://gas-price.p.rapidapi.com/europeanCountries?city=${city}`,
            headers: {
                'X-RapidAPI-Key': 'YOUR_API_KEY= 3f9ece2fb9mshb3cc6ccb157ee8fp1c5cd8jsn6a6f9bc1f873',
                'X-RapidAPI-Host': 'gas-price.p.rapidapi.com'
            }
        };
        const response = yield axios_1.default.request(options);
        const gasPrices = response.data;
        return res.status(200).json(gasPrices);
    }
    catch (error) {
        console.error('Error fetching gas prices:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getGasPrices = getGasPrices;
//# sourceMappingURL=gasPriceController.js.map