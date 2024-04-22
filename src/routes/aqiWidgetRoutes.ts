// Import necessary modules
import express, { Request, Response, NextFunction } from 'express';
import axios from 'axios';

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Define route handler for fetching AQI data based on city
app.get('/api/v1/aqi-widget/:city', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const city = req.params.city; // Extract the city parameter from the request

        // Make the API call to fetch AQI data for the specified city
        const response = await axios.get(`https://api.waqi.info/feed/${city}/?token=e1e26600861c3e38c921da095baad05c07d509cd`);

        // Extract the AQI data from the API response
        const aqiWidgetResponse = response.data;

        if (aqiWidgetResponse) {
            return res.status(200).json(aqiWidgetResponse);
        } else {
            return res.status(404).json({ error: 'Air quality data not found for the specified city' });
        }
    } catch (error) {
        console.error('Error fetching air quality data:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
