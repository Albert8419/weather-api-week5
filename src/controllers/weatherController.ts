import { Request, Response } from 'express';
import {
  generateDublinWeatherData,
  generateLondonWeatherData,
} from '../services/weatherService.js';
import { validationResult } from 'express-validator';
/*** Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const getWeatherData = async (req: Request, res: Response) => {
  // Check if there are any validation errors
  const errors = validationResult(req);
  // We will log them and send a 400 status code
  if (!errors.isEmpty()) {
    console.error('Validation error', errors.mapped());
    res.status(400).json({ errors: errors.array() });
    return;
  }
  // We will use a try catch block to catch any errors
  try {
    // Get the city param from the request
    const { city } = req.params;
    console.log(city);
    // We will create a variable with a type of WeatherData
    let finalWeatherData: WeatherData;
    // We will use an if statement to check which city was passed in
    if (city === 'london') {
      console.log(generateLondonWeatherData());
      finalWeatherData = generateLondonWeatherData();
    } else if (city === 'dublin') {
      finalWeatherData = generateDublinWeatherData();
    } else {
      // If the city is not london or dublin, we will throw an error
      res.status(404).send('City not found');
    }
    // We will return the weather data as JSON
    res.status(200).json(finalWeatherData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send('Error in fetching weather data');
  }
};
