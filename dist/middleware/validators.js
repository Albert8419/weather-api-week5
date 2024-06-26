"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCity = void 0;
const express_validator_1 = require("express-validator");
// Validator for city parameter
exports.validateCity = (0, express_validator_1.param)('city')
    .trim() // Remove any leading or trailing whitespace
    .isString() // Check if the value is a string
    .withMessage('City parameter must be a valid string') // Updated error message for non-string values
    .notEmpty() // Check if the value is not empty
    .withMessage('City parameter cannot be empty')
    .customSanitizer(value => value.toLowerCase()); // Convert the city name to lowercase for case-insensitive comparison
