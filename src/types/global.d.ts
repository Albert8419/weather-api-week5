/**
 * Represents the data structure for Air Quality Index (AQI) widget data.
 */
interface AqiWidgetData {
  city?: string;         // Optional: Name of the city for which the data applies
  aqi: number;           // Air Quality Index (AQI) value
  details: string;       // Additional details about the AQI
  // Add more properties as needed
  timestamp?: Date;      // Optional: Timestamp when the data was retrieved
}
