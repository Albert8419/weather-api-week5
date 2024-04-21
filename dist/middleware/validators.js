"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParameter = exports.validateApiKey = void 0;
const express_validator_1 = require("express-validator");
// Example validator for an API key or another parameter
exports.validateApiKey = (0, express_validator_1.param)('apiKey').custom((value) => {
    // Placeholder logic: Check if the API key format is correct
    return /[A-Z0-9]{32}/.test(value); // Example regex for format validation
}).withMessage('Invalid API key format.');
// If you decide to require parameters for gas prices related to region or type
exports.validateParameter = (0, express_validator_1.param)('parameter').custom((value) => {
    // Example: Validate that the parameter is one of a set of acceptable values
    const validParams = ['regular', 'premium', 'diesel'];
    return validParams.includes(value.toLowerCase());
}).withMessage('Invalid parameter. Must be either "regular", "premium", or "diesel".');
//# sourceMappingURL=validators.js.map