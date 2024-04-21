"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderAqiWidget = exports.getAqiWidgetAxiosClient = void 0;
const axios_1 = __importDefault(require("axios"));
// Air Quality Index (AQI) Widget API configurations
const aqiWidgetCity = 'beijing'; // Change this to the desired city
const aqiWidgetLang = 'en'; // Change this to the desired language
const aqiWidgetContainerId = 'city-aqi-container'; // Change this to the desired container ID
// Initialize AQI Widget client
const getAqiWidgetAxiosClient = () => {
    return axios_1.default.create({
        baseURL: 'https://feed.aqicn.org',
    });
};
exports.getAqiWidgetAxiosClient = getAqiWidgetAxiosClient;
// Initialize and render AQI Widget
function renderAqiWidget() {
    (0, exports.getAqiWidgetAxiosClient)().get(`/feed/${aqiWidgetCity}/${aqiWidgetLang}/feed.v1.js`)
        .then(response => {
        var _a;
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.innerHTML = response.data;
        (_a = document.getElementById(aqiWidgetContainerId)) === null || _a === void 0 ? void 0 : _a.appendChild(script);
    })
        .catch(error => {
        console.error('Error loading AQI Widget:', error);
    });
}
exports.renderAqiWidget = renderAqiWidget;
