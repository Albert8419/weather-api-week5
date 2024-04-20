import { __awaiter } from "tslib";
import { faker } from '@faker-js/faker';
export const generateLondonWeatherData = () => __awaiter(void 0, void 0, void 0, function* () {
    const generatedWeatherData = {
        city: 'London',
        temperature: faker.number.int({ min: -15, max: 30 }),
        humidity: faker.number.int({ min: 79, max: 86 }),
        wind: faker.number.int({ min: 2, max: 78 }),
        rain: faker.number.int({ min: 65, max: 75 }),
    };
    return generatedWeatherData;
});
export const generateDublinWeatherData = () => __awaiter(void 0, void 0, void 0, function* () {
    const generatedWeatherData = {
        city: 'Dublin',
        temperature: faker.number.int({ min: -15, max: 30 }),
        humidity: faker.number.int({ min: 79, max: 86 }),
        wind: faker.number.int({ min: 2, max: 78 }),
        rain: faker.number.int({ min: 65, max: 75 }),
    };
    return generatedWeatherData;
});
//# sourceMappingURL=weatherService.js.map