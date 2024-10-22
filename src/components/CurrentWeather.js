import React from 'react';

const CurrentWeather = ({ weatherData }) => {
  if (!weatherData || !weatherData.tempCelsius) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div>
      <h2>Current Weather in {weatherData.city}</h2>
      <p>Temperature: {weatherData.tempCelsius}°C</p>
      <p>Feels Like: {weatherData.feelsLike}°C</p>
      <p>Condition: {weatherData.condition}</p>
      <p>Last updated: {new Date(weatherData.timestamp * 1000).toLocaleTimeString()}</p>
    </div>
  );
};

export default CurrentWeather;
