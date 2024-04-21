import { param } from 'express-validator';

// Validator for city parameter
export const validateCity = param('city')
  .trim() // Remove any leading or trailing whitespace
  .isString() // Check if the value is a string
  .withMessage('City parameter must be a valid city name')
  .notEmpty() // Check if the value is not empty
  .withMessage('City parameter cannot be empty')
  .customSanitizer(value => value.toLowerCase()); // Convert the city name to lowercase for case-insensitive comparison
