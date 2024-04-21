"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParameter = exports.validateCity = exports.validateApiKey = void 0;
const express_validator_1 = require("express-validator");

// Validator for API key format
exports.validateApiKey = express_validator_1.param('apiKey')
    .custom((value) => {
    // Validate API key format (example regex)
    return /[A-Z0-9]{32}/.test(value);
})
    .withMessage('Invalid API key format. It must consist of 32 uppercase letters or digits.');

// Validator for city parameter
exports.validateCity = express_validator_1.param('city')
    .isAlpha()
    .withMessage('City must only contain letters')
    .bail()
    .trim();

// Validator for gas price parameter
exports.validateParameter = express_validator_1.param('parameter')
    .custom((value) => {
    // Validate parameter against accepted values, including 'midGrade'
    const validParams = ['regular', 'midGrade', 'premium', 'diesel'];
    return validParams.includes(value.toLowerCase());
})
    .withMessage('Invalid parameter. Must be either "regular", "midGrade", "premium", or "diesel".');
