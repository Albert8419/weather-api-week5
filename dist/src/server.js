import express from 'express';
import cors from 'cors';
// Assuming the gas prices route handler file is correctly named and located
import gasPricesRoutes from './routes/gasPricesRoutes.js';
const app = express();
const PORT = 3000;
app.use(cors()); // Enabling CORS for all requests
app.use(express.json()); // Middleware to parse JSON bodies
// Update the route to use the gas prices routes handler
app.use('/api/gas-prices', gasPricesRoutes);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map