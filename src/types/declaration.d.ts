// declaration.d.ts

declare module '../services/gasPricesService' {
    // Specify the expected exports from the gasPricesService
    export function fetchGasPrices(city: string): Promise<any>; // Adjust the return type based on actual data
  }
  
  declare module '../validators' {
    // Define types for any exports from the validators module
    import { ValidationChain } from 'express-validator';
  
    export const validateApiKey: ValidationChain;
    export const validateCity: ValidationChain;
    export const validateParameter: ValidationChain;
  }
  