"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
// Assuming the gas prices route handler file is correctly named and located
const gasPricesRoutes_js_1 = tslib_1.__importDefault(require("./routes/gasPricesRoutes.js"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)()); // Enabling CORS for all requests
app.use(express_1.default.json()); // Middleware to parse JSON bodies
// Update the route to use the gas prices routes handler
app.use('/api/gas-prices', gasPricesRoutes_js_1.default);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map