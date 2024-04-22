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
const fetchAqiWidgetData_1 = require("../services/fetchAqiWidgetData");
const getAqiWidgetData = (city) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!city) {
            throw new Error('City parameter is required');
        }
        // Call the function to fetch AQI widget data from the external API
        const aqiWidgetData = yield (0, fetchAqiWidgetData_1.fetchAqiWidgetData)(city);
        return aqiWidgetData;
    }
    catch (error) {
        console.error('Error fetching AQI widget data:', error);
        throw error;
    }
});
exports.getAqiWidgetData = getAqiWidgetData;
