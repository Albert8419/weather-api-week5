"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGasPrices = void 0;
const tslib_1 = require("tslib");
const config_js_1 = require("../config/config.js"); // Correct relative path
const getGasPrices = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const city = req.params.city;
        if (!city) {
            return res.status(400).json({ error: 'City parameter is missing' });
        }
        const axiosInstance = (0, config_js_1.getGasApiAxiosClient)(); // Use the Axios instance configured with the API key and host.
        const response = yield axiosInstance.get(`/europeanCountries?city=${city}`);
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