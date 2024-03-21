import { __awaiter } from "tslib";
import { generateDublinWeatherData, generatelondonWeatherData } from '../services/weatherService.js';
import { validationResult } from 'express-validator';
export const getWeatherData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error('Validation error', errors.array());
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { city } = req.params;
        let finalWeatherData;
        if (city === 'london') {
            finalWeatherData = generatelondonWeatherData();
        }
        else if (city === 'Dublin') {
            finalWeatherData = generateDublinWeatherData();
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