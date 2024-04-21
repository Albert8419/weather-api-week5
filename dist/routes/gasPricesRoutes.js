"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const gasPriceController_1 = require("../controllers/gasPriceController");
const gasPriceValidators_1 = require("../validators/gasPriceValidators"); // Make sure this path is correct
const router = express_1.default.Router();
// Apply the validateCity middleware to the route to validate the 'city' parameter
router.get('/gas-prices/:city', gasPriceValidators_1.validateCity, gasPriceController_1.getGasPrices);
exports.default = router;
//# sourceMappingURL=gasPricesRoutes.js.map