import { param } from 'express-validator';

export const validateCityName = param('city')
  .isString()
  .isIn(['london', 'dublin'])
  .withMessage('City name must be either london or dublin');
