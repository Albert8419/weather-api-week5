import { param } from 'express-validator';

// Validator for API key format
export const validateApiKey = param('apiKey')
  .custom((value) => {
    // Validate API key format (example regex)
    return /[A-Z0-9]{32}/.test(value);
  })
  .withMessage('Invalid API key format. It must consist of 32 uppercase letters or digits.');

// Validator for city parameter
export const validateCity = param('city')
  .trim() // Remove any whitespace
  .isAlpha() // Check if the value contains only letters
  .withMessage('City parameter must consist only of letters.');

// Validator for gas price parameter
export const validateParameter = param('parameter')
  .custom((value) => {
    // Validate parameter against accepted values, including 'midGrade'
    const validParams = ['regular', 'midGrade', 'premium', 'diesel'];
    return validParams.includes(value.toLowerCase());
  })
  .withMessage('Invalid parameter. Must be either "regular", "midGrade", "premium", or "diesel".');
