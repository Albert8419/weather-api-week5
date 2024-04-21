declare module '../services/aqiWidgetService' {
  // Specify the expected exports from the aqiWidgetService
  export function fetchAqiWidgetData(city: string): Promise<any>; // Adjust the return type based on actual data
}

declare module '../middleware/validators' {
  // Define types for any exports from the validators module
  import { ValidationChain } from 'express-validator';

  export const validateCity: ValidationChain;
}
