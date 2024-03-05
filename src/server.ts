import express from 'express';
// We will create an express app
import weatherRoute from './routes/weatherRoutes.js';
const app = express();
// The port that the express server will listen on
const PORT = 3000;

import cors from "cors";
app.use(cors());

app.use(express.json());
app.use('/api/weather', weatherRoute);
// Start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
