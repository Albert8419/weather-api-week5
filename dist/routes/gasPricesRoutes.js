"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const gasPriceController_js_1 = require("../controllers/gasPriceController.js");
const validators_js_1 = require("../middleware/validators.js");
const router = express_1.default.Router();
// Route for fetching gas prices with optional parameters validation
router.get('/gas-prices', [validators_js_1.validateApiKey, validators_js_1.validateParameter], gasPriceController_js_1.getGasPrices);
exports.default = router;
//# sourceMappingURL=gasPricesRoutes.js.map