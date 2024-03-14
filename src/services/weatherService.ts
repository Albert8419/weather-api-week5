import faker from 'faker'; // Correct import statement

export const generateLondonWeatherData = (): WeatherData => {
  const generatedWeatherData: WeatherData = {
    city: 'London',
    temperature: faker.datatype.number({ min: -15, max: 30 }), // Corrected usage of faker
    humidity: faker.datatype.number({ min: 79, max: 86 }), // Corrected usage of faker
    wind: faker.datatype.number({ min: 2, max: 78 }), // Corrected usage of faker
    rain: faker.datatype.number({ min: 65, max: 75 }), // Corrected usage of faker
  };
  return generatedWeatherData;
};

export const generateDublinWeatherData = (): WeatherData => {
  const generatedWeatherData: WeatherData = {
    city: 'Dublin',
    temperature: faker.datatype.number({ min: -15, max: 30 }), // Corrected usage of faker
    humidity: faker.datatype.number({ min: 79, max: 86 }), // Corrected usage of faker
    wind: faker.datatype.number({ min: 2, max: 78 }), // Corrected usage of faker
    rain: faker.datatype.number({ min: 65, max: 75 }), // Corrected usage of faker
  };
  return generatedWeatherData;
};
