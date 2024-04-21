import express from 'express';
import cors from 'cors';
import gasPricesRoutes from './routes/gasPricesRoutes.js'; // Assuming this is the correct path to your routes file

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Define the route to handle GET requests for gas prices
app.use('/api/gas-prices', gasPricesRoutes); // This assumes that your gas prices routes are defined in gasPricesRoutes.js

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
