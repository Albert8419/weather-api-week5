import { param } from 'express-validator';

export const validateCity = param('city').custom((value) => {
  const normalizedCity = value.toLowerCase();
  return normalizedCity === 'london' || normalizedCity === 'dublin';
}).withMessage('City name must be either "London" or "Dublin"');