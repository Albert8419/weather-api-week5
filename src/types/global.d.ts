/**
 * Represents the data structure for Air Quality Index (AQI) widget data.
 */
interface AqiWidgetData {
  city: string;          // Name of the city for which the data applies
  aqi: number;           // Air Quality Index (AQI) value
  details: string;       // Additional details about the AQI
  timestamp: Date;       // Timestamp when the data was retrieved
  // Add more properties as needed
}

// Example usage:
const widgetData: AqiWidgetData = {
  city: 'Beijing',
  aqi: 158,
  details: 'Unhealthy',
  timestamp: new Date(),
};
