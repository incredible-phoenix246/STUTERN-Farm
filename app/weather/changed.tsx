// ChangeLocationScreen.tsx
import React, { useState } from 'react';

interface WeatherResponse {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    wind_kph: number;
  };
  forecast: {
    forecastday: {
      hour: {
        time: string;
        temp_c: number;
        wind_kph: number;
      }[];
    }[];
  };
}

const ChangeLocationScreen: React.FC = () => {
  const [locationQuery, setLocationQuery] = useState('nigeria');
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationQuery(e.target.value);
  };

  const handleGetWeather = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=65c3ea8123ca484d889235042232711&q=${locationQuery}`
      );
      const data: WeatherResponse = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-black p-4 rounded-md shadow-md">
      <div>
        <label htmlFor="locationInput" className="block text-lg font-semibold mb-2">
          Change Location:
        </label>
        <input
          id="locationInput"
          type="text"
          value={locationQuery}
          onChange={handleLocationChange}
          className="w-full border p-2 text-black rounded-md mb-4"
        />
        <button onClick={handleGetWeather} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Get Weather
        </button>
      </div>
      {weatherData && (
        <div>
          <h2 className="text-2xl font-semibold">{weatherData.location.name}</h2>
          <p className="text-lg">Current Temperature: {weatherData.current.temp_c} °C</p>
          <p className="text-lg">Current Wind Speed: {weatherData.current.wind_kph} kph</p>
          <h3 className="text-xl font-semibold mt-4">Forecast for the Next 10 Hours:</h3>
          <table className="table-auto w-full mt-2">
            <thead>
              <tr>
                <th>Time</th>
                <th>Temperature (°C)</th>
                <th>Wind Speed (kph)</th>
              </tr>
            </thead>
            <tbody>
              {weatherData.forecast.forecastday[0].hour.slice(0, 10).map((hourData) => (
                <tr key={hourData.time}>
                  <td>{hourData.time}</td>
                  <td>{hourData.temp_c}</td>
                  <td>{hourData.wind_kph}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ChangeLocationScreen;
