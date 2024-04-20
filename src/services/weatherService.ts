import { faker } from '@faker-js/faker';

export const generateLondonWeatherData = async (): Promise<WeatherData> => {
  const generatedWeatherData: WeatherData = {
    city: 'London',
    temperature: faker.datatype.number({ min: -15, max: 30 }),
    humidity: faker.datatype.number({ min: 79, max: 86 }),
    wind: faker.datatype.number({ min: 2, max: 78 }),
    rain: faker.datatype.number({ min: 65, max: 75 }),
  };

  return generatedWeatherData;
};

export const generateDublinWeatherData = async (): Promise<WeatherData> => {
  const generatedWeatherData: WeatherData = {
    city: 'Dublin',
    temperature: faker.datatype.number({ min: -15, max: 30 }),
    humidity: faker.datatype.number({ min: 79, max: 86 }),
    wind: faker.datatype.number({ min: 2, max: 78 }),
    rain: faker.datatype.number({ min: 65, max: 75 }),
  };

  return generatedWeatherData;
};
