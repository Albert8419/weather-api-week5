"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const gasPricesRoutes_js_1 = tslib_1.__importDefault(require("./routes/gasPricesRoutes.js"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)()); // Enable all CORS requests
app.use((0, helmet_1.default)()); // Helps secure your Express apps by setting various HTTP headers
app.use((0, morgan_1.default)('combined')); // Log HTTP requests
app.use(express_1.default.json()); // Built-in middleware for parsing JSON
// Define the route to handle GET requests for gas prices
app.use('/api/v1/gas-prices', gasPricesRoutes_js_1.default);
// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Correctly accessing 'stack' property on Error type
    res.status(500).send('Something broke!');
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map