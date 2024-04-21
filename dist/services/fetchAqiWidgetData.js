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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAqiWidgetData = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const AQI_WIDGET_API_KEY = process.env.AQI_WIDGET_API_KEY;
const API_URL = 'https://feed.aqicn.org/feed';
const fetchAqiWidgetData = (city) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`${API_URL}/${city}/en/feed.v1.js`, {
            headers: {
                'x-rapidapi-host': 'feed.aqicn.org',
                'x-rapidapi-key': AQI_WIDGET_API_KEY
            }
        });
        const data = response.data;
        return data; // Confirm the structure of this data matches what your application expects
    }
    catch (error) {
        console.error('Failed to fetch AQI widget data:', error);
        // Handle Axios errors
        if (axios_1.default.isAxiosError(error)) {
            const axiosError = error;
            if (axiosError.response) {
                console.error('API response error:', axiosError.response.status, axiosError.response.data);
            }
            else if (axiosError.request) {
                console.error('Request made but no response received:', axiosError.request);
            }
            else {
                console.error('Error setting up request:', axiosError.message);
            }
        }
        else {
            console.error('An unexpected error occurred');
        }
        throw new Error('Failed to fetch AQI widget data'); // Propagate the error to the caller with a descriptive message
    }
});
exports.fetchAqiWidgetData = fetchAqiWidgetData;
