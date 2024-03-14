import faker from 'faker'; // Correct import statement
import { storeWeatherdata } from "../helpers/helpers.ts";

export const generateLondonWeatherData = () => {
    const generatedWeatherData = {
        city: 'London',
        temperature: faker.datatype.number({ min: -15, max: 30 }), // Corrected usage of faker
        humidity: faker.datatype.number({ min: 79, max: 86 }), // Corrected usage of faker
        wind: faker.datatype.number({ min: 2, max: 78 }), // Corrected usage of faker
        rain: faker.datatype.number({ min: 65, max: 75 }), // Corrected usage of faker
    };

    storeWeatherdata(generatedWeatherData).catch(console.error);

    return generatedWeatherData;
};
export const generateDublinWeatherData = () => {
    const generatedWeatherData = {
        city: 'Dublin',
        temperature: faker.datatype.number({ min: -15, max: 30 }), // Corrected usage of faker
        humidity: faker.datatype.number({ min: 79, max: 86 }), // Corrected usage of faker
        wind: faker.datatype.number({ min: 2, max: 78 }), // Corrected usage of faker
        rain: faker.datatype.number({ min: 65, max: 75 }), // Corrected usage of faker
    };

    storeWeatherdata(generatedWeatherData).catch(console.error);

    return generatedWeatherData;
};
//# sourceMappingURL=weatherService.js.map