// global.d.ts in the types folder

/**
 * Represents the various categories of gas prices.
 */
interface GasPriceData {
  city?: string;         // Optional: Name of the city for which the data applies
  regular: number;       // Regular gas price
  midGrade: number;      // Mid-grade gas price
  premium: number;       // Premium gas price
  diesel: number;        // Diesel price
  timestamp?: Date;      // Optional: Timestamp when the data was retrieved
}
