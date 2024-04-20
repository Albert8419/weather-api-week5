import { __awaiter } from "tslib";
import { faker } from '@faker-js/faker';
export const generateLondonWeatherData = () => __awaiter(void 0, void 0, void 0, function* () {
    const generatedWeatherData = {
        city: 'London',
        temperature: faker.datatype.number({ min: -15, max: 30 }),
        humidity: faker.datatype.number({ min: 79, max: 86 }),
        wind: faker.datatype.number({ min: 2, max: 78 }),
        rain: faker.datatype.number({ min: 65, max: 75 }),
    };
    return generatedWeatherData;
});
export const generateDublinWeatherData = () => __awaiter(void 0, void 0, void 0, function* () {
    const generatedWeatherData = {
        city: 'Dublin',
        temperature: faker.datatype.number({ min: -15, max: 30 }),
        humidity: faker.datatype.number({ min: 79, max: 86 }),
        wind: faker.datatype.number({ min: 2, max: 78 }),
        rain: faker.datatype.number({ min: 65, max: 75 }),
    };
    return generatedWeatherData;
});
//# sourceMappingURL=weatherService.js.map