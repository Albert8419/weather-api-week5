import { param } from 'express-validator';

export const validateCityName = param('city').custom((value) => {
  // Normalize the incoming city value to lower case
  const normalizedCity = value.toLowerCase();
  // Check against normalized city names
  return ['london', 'dublin'].includes(normalizedCity);
}).withMessage('City name must be "London" or "Dublin" in any case variation');
