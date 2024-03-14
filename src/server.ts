import express from 'express';
import cors from 'cors'; // Moved the cors import statement here

import weatherRoute from './routes/weatherRoutes.js';

const app = express();
const PORT = 3000;

app.use(cors()); // Now the cors middleware is initialized before any other middleware

app.use(express.json());
app.use('/api/weather', weatherRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
