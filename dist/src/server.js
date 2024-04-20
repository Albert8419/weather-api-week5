import express from 'express';
import router from './routes';  // Importing the router from routes.js

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', router);  // Using the router with all configured routes

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
