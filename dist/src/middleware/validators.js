import { param } from 'express-validator';
export const validateCityName = param('city')
    .isString()
    .trim()
    .toLowerCase() // Convert the city name to lowercase for case-insensitive comparison
    .isIn(['London', 'Dublin'])
    .withMessage('City name must be either "London" or "Dublin"');
//# sourceMappingURL=validators.js.map