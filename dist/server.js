"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const gasPricesRoutes_js_1 = tslib_1.__importDefault(require("./routes/gasPricesRoutes.js")); // Assuming this is the correct path to your routes file
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Define the route to handle GET requests for gas prices
app.use('/api/gas-prices', gasPricesRoutes_js_1.default); // This assumes that your gas prices routes are defined in gasPricesRoutes.js
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map