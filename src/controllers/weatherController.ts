import { Request, Response } from 'express';
import { generateDublinWeatherData, generateLondonWeatherData } from '../services/weatherService.js';
import { validationResult } from 'express-validator';

export const getWeatherData = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error('Validation error', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { city } = req.params;
    let finalWeatherData: WeatherData;

    if (city === 'london') {
      finalWeatherData = generateLondonWeatherData();
    } else if (city === 'dublin') {
      finalWeatherData = generateDublinWeatherData();
    } else {
      return res.status(400).send('Invalid city');
    }

    res.status(200).json(finalWeatherData);
  } catch (error) {
    console.error('Error in fetching weather data:', error);
    res.status(500).send('Error in fetching weather data');
  }
};
