import { param } from 'express-validator';

// Validator for API key format
export const validateApiKey = param('apiKey')
  .custom((value) => {
    // Validate API key format (example regex)
    return /[A-Z0-9]{32}/.test(value);
  })
  .withMessage('Invalid API key format. It must consist of 32 uppercase letters or digits.');

// Validator for gas price parameter
export const validateParameter = param('parameter')
  .custom((value) => {
    // Validate parameter against accepted values
    const validParams = ['regular', 'premium', 'diesel'];
    return validParams.includes(value.toLowerCase());
  })
  .withMessage('Invalid parameter. Must be either "regular", "premium", or "diesel".');
