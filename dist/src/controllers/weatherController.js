import { __awaiter } from "tslib";
import { validationResult } from 'express-validator';
import { generateDublinWeatherData, generateLondonWeatherData } from '../services/weatherService.js';
export const getWeatherData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error('Validation error', errors.array());
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { city } = req.params;
        let finalWeatherData;
        const cityLower = city.toLowerCase(); // Convert city to lower case
        if (cityLower === 'london') {
            finalWeatherData = yield generateLondonWeatherData();
        }
        else if (cityLower === 'dublin') {
            finalWeatherData = yield generateDublinWeatherData();
        }
        else {
            return res.status(400).send('Invalid city');
        }
        res.status(200).json(finalWeatherData);
    }
    catch (error) {
        console.error('Error in fetching weather data:', error);
        res.status(500).send('Error in fetching weather data');
    }
});
//# sourceMappingURL=weatherController.js.map