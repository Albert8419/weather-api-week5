import { param } from 'express-validator';
export const validateCityName = param('city')
    .isString()
    .trim()
    .toLowerCase() // Convert the city name to lowercase for case-insensitive comparison
    .isIn(['london', 'Dublin'])
    .withMessage('City name must be either "london" or "Dublin"');
//# sourceMappingURL=validators.js.map