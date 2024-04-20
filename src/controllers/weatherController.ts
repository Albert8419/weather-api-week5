// In weatherController.ts
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { generateDublinWeatherData, generateLondonWeatherData } from '../services/weatherService.js';

export const getWeatherData = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error('Validation error', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { city } = req.params;
    let finalWeatherData: WeatherData; // No import necessary, WeatherData is globally available

    if (city.toLowerCase() === 'london') {
      finalWeatherData = await generateLondonWeatherData();
    } else if (city.toLowerCase() === 'dublin') {
      finalWeatherData = await generateDublinWeatherData();
    } else {
      return res.status(400).send('Invalid city');
    }

    res.status(200).json(finalWeatherData);
  } catch (error) {
    console.error('Error in fetching weather data:', error);
    res.status(500).send('Error in fetching weather data');
  }
};
