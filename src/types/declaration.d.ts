// Declare additional types for the aqiWidgetService module
declare module '../services/aqiWidgetService' {
  // Specify the expected structure of data returned by fetchAqiWidgetData
  interface AqiWidgetData {
    city: string;
    aqi: number;
    // Add more properties as needed
  }

  export function fetchAqiWidgetData(city: string): Promise<AqiWidgetData>;
}

// Declare types for the validators module
declare module '../middleware/validators' {
  import { ValidationChain } from 'express-validator';

  // ValidationChain for validating the city parameter
  export const validateCity: ValidationChain;
}
