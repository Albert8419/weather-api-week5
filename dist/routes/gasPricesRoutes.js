"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// gasPricesRoutes.ts
const express_1 = tslib_1.__importDefault(require("express"));
const gasPriceController_1 = require("../controllers/gasPriceController");
const router = express_1.default.Router();
router.get('/gas-prices/:city', gasPriceController_1.getGasPrices);
exports.default = router;
//# sourceMappingURL=gasPricesRoutes.js.map