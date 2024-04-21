import { param } from 'express-validator';

// Validator for city parameter
export const validateCity = param('city')
  .trim() // Remove any whitespace
  .isAlpha() // Check if the value contains only letters
  .withMessage('City parameter must consist only of letters.');
