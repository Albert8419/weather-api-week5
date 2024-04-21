"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParameter = exports.validateApiKey = void 0;
const express_validator_1 = require("express-validator");
// Validator for API key format
exports.validateApiKey = (0, express_validator_1.param)('apiKey')
    .custom((value) => {
    // Validate API key format (example regex)
    return /[A-Z0-9]{32}/.test(value);
})
    .withMessage('Invalid API key format. It must consist of 32 uppercase letters or digits.');
// Validator for gas price parameter
exports.validateParameter = (0, express_validator_1.param)('parameter')
    .custom((value) => {
    // Validate parameter against accepted values
    const validParams = ['regular', 'premium', 'diesel'];
    return validParams.includes(value.toLowerCase());
})
    .withMessage('Invalid parameter. Must be either "regular", "premium", or "diesel".');
//# sourceMappingURL=validators.js.map