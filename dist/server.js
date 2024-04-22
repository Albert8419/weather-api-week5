"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const aqiWidgetRoutes_1 = __importDefault(require("./routes/aqiWidgetRoutes")); // Adjusted import statement
// Create Express app
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('combined'));
// Routes
app.use('/api/v1/aqi-widget', aqiWidgetRoutes_1.default);
// Root endpoint handler
app.get('/', (req, res) => {
    res.send('Server is running successfully.');
});
// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
