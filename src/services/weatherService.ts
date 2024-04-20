import faker from '@faker-js/faker';
import { storeWeatherData } from './helpers'; // Make sure you have this helper function implemented as described in the provided documents.

// TypeScript interface for weather data
interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  wind: number;
  rain: number;
}

export const generateLondonWeatherData = async (): Promise<WeatherData> => {
  const generatedWeatherData: WeatherData = {
    city: 'London',
    temperature: faker.datatype.number({ min: -15, max: 30 }),
    humidity: faker.datatype.number({ min: 79, max: 86 }),
    wind: faker.datatype.number({ min: 2, max: 78 }),
    rain: faker.datatype.number({ min: 65, max: 75 }),
  };

  // Store weather data on the blockchain
  await storeWeatherData(generatedWeatherData);

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

  // Store weather data on the blockchain
  await storeWeatherData(generatedWeatherData);

  return generatedWeatherData;
};

// Please note that this assumes you have a helper file with the `storeWeatherData` function that handles the interaction with Algorand.