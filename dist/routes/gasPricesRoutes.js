"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const gasPriceController_1 = require("../controllers/gasPriceController");
const validators_1 = require("../middleware/validators");
const router = express_1.default.Router();
/**
 * Route for fetching gas prices with optional parameters validation.
 * Validates API key and gas price parameter.
 */
router.get('/gas-prices/:city', [validators_1.validateApiKey, validators_1.validateParameter], (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        // Call the controller function to handle the request
        yield (0, gasPriceController_1.getGasPrices)(req, res);
    }
    catch (error) {
        console.error('Error in gas prices route:', error);
        res.status(500).send('Internal Server Error');
    }
}));
exports.default = router;
//# sourceMappingURL=gasPricesRoutes.js.map