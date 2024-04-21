import { param } from 'express-validator';

// Example validator for an API key or another parameter
export const validateApiKey = param('apiKey').custom((value) => {
  // Placeholder logic: Check if the API key format is correct
  return /[A-Z0-9]{32}/.test(value);  // Example regex for format validation
}).withMessage('Invalid API key format.');

// If you decide to require parameters for gas prices related to region or type
export const validateParameter = param('parameter').custom((value) => {
  // Example: Validate that the parameter is one of a set of acceptable values
  const validParams = ['regular', 'premium', 'diesel'];
  return validParams.includes(value.toLowerCase());
}).withMessage('Invalid parameter. Must be either "regular", "premium", or "diesel".');
