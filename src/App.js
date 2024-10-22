import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentWeather from './components/CurrentWeather';
import DailySummary from './components/DailySummary';
import WeatherChart from './components/WeatherChart';
import Alerts from './components/Alerts';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [selectedCity, setSelectedCity] = useState('Delhi');
  
  const cities = ["Delhi", "Mumbai", "Chennai", "Bangalore", "Kolkata", "Hyderabad"];

  useEffect(() => {
    fetchWeatherData(selectedCity);
  }, [selectedCity]);

  const fetchWeatherData = async (city) => {
    try {
      const response = await axios.get(`http://localhost:8080/weather/${city}`);
      setWeatherData(response.data);
      checkAlerts(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const checkAlerts = (data) => {
    const newAlerts = [];
    if (data.tempCelsius > 35) {
      newAlerts.push(`High temperature alert: ${data.tempCelsius}°C in ${data.city}`);
    }
    setAlerts(newAlerts);
  };

  return (
    <div>
      <h1>Weather Monitoring Dashboard</h1>
      
      {/* City Selector */}
      <select onChange={(e) => setSelectedCity(e.target.value)}>
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      {/* Current Weather */}
      <CurrentWeather weatherData={weatherData} />

      {/* Daily Summary */}
      <DailySummary city={selectedCity} />

      {/* Alerts */}
      <Alerts alerts={alerts} />

      {/* Weather Trends (Historical Data Visualization) */}
      <WeatherChart city={selectedCity} />
    </div>
  );
}

export default App;
