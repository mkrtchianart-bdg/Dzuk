const API_KEY = "0f74f183dd0f440dbed60406250702";

export async function fetchWeatherData(location = 'Monaco', days = 5) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${days}&lang=hy`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

export function getWeatherIcon(iconUrl) {
  return iconUrl || 'https://cdn.weatherapi.com/weather/64x64/day/116.png'; // default icon
}

export function formatDate(dateString, locale = 'hy-AM', options = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
}) {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, options);
}   