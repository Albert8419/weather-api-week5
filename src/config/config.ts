import axios from 'axios';

// Air Quality Index (AQI) Widget API configurations
const aqiWidgetCity = 'beijing'; // Change this to the desired city
const aqiWidgetLang = 'en'; // Change this to the desired language
const aqiWidgetContainerId = 'city-aqi-container'; // Change this to the desired container ID

// Initialize AQI Widget client
export const getAqiWidgetAxiosClient = () => {
  return axios.create({
    baseURL: 'https://feed.aqicn.org',
  });
}

// Initialize and render AQI Widget
export function renderAqiWidget() {
  getAqiWidgetAxiosClient().get(`/feed/${aqiWidgetCity}/${aqiWidgetLang}/feed.v1.js`)
    .then(response => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.innerHTML = response.data;
      document.getElementById(aqiWidgetContainerId)?.appendChild(script);
    })
    .catch(error => {
      console.error('Error loading AQI Widget:', error);
    });
}
