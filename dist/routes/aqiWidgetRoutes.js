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
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const validators_1 = require("/middleware/validators");
const router = express_1.default.Router();
router.get('/:city', validators_1.validateCity, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const city = req.params.city;
        const response = yield axios_1.default.get(`https://api.waqi.info/feed/${city}/?token=e1e26600861c3e38c921da095baad05c07d509cd`);
        const aqiWidgetResponse = response.data;
        if (aqiWidgetResponse) {
            return res.status(200).json(aqiWidgetResponse);
        }
        else {
            return res.status(404).json({ error: 'Air quality data not found for the specified city' });
        }
    }
    catch (error) {
        console.error('Error fetching air quality data:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}));
exports.default = router;
