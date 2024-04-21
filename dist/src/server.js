import express from 'express';
import cors from 'cors'; // Moved the cors import statement here
import weatherRoute from './routes/weatherRoutes.js';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();
const app = express();
const PORT = 3000;
app.use(cors()); // Now the cors middleware is initialized before any other middleware
app.use(express.json());
app.use('/api/weather', weatherRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map