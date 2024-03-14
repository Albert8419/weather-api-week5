import { param } from 'express-validator';
export const validateCityName = param('city')
    .isString()
    .trim()
    .toLowerCase() // Convert the city name to lowercase for case-insensitive comparison
    .isIn(['london', 'dublin'])
    .withMessage('City name must be either "london" or "dublin"');
//# sourceMappingURL=validators.js.map