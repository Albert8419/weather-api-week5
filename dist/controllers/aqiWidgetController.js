"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAqiWidgetData = void 0;
const config_js_1 = require("../config/config.js"); // Correct relative path
const getAqiWidgetData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const city = req.params.city;
        if (!city) {
            return res.status(400).json({ error: 'City parameter is missing' });
        }
        const language = req.query.lang || 'en'; // Get language from query parameter or default to English
        const axiosInstance = (0, config_js_1.getAqiWidgetAxiosClient)(); // Use the Axios instance configured for AQI widget API.
        const response = yield axiosInstance.get(`/feed/${city}/${language}/feed.v1.js`);
        const aqiWidgetData = response.data;
        return res.status(200).send(aqiWidgetData);
    }
    catch (error) {
        console.error('Error fetching AQI widget data:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getAqiWidgetData = getAqiWidgetData;
