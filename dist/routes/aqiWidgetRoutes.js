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
const aqiWidgetController_1 = require("../controllers/aqiWidgetController");
const validators_js_1 = require("../middleware/validators.js");
const router = express_1.default.Router();
router.get('/aqi-widget/:city', validators_js_1.validateCity, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const city = (_a = req.params) === null || _a === void 0 ? void 0 : _a.city;
        if (!city) {
            return res.status(400).json({ error: 'City parameter is missing' });
        }
        // Call the controller function to get the response
        const aqiWidgetResponse = yield (0, aqiWidgetController_1.getAqiWidgetData)(city);
        if (aqiWidgetResponse) {
            return res.status(200).json(aqiWidgetResponse);
        }
        else {
            return res.status(404).json({ error: 'Air quality data not found' });
        }
    }
    catch (error) {
        console.error('Error fetching air quality data:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}));
exports.default = router;
