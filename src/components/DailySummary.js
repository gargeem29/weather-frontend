import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DailySummary = ({ city }) => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    fetchDailySummary(city);
  }, [city]);

  const fetchDailySummary = async (city) => {
    try {
      const response = await axios.get(`http://localhost:8080/weather/summary/${city}`);
      setSummary(response.data);
    } catch (error) {
      console.error("Error fetching daily summary:", error);
    }
  };

  if (!summary) {
    return <div>Loading daily summary...</div>;
  }

  return (
    <div>
      <h3>Daily Summary for {city}</h3>
      <p>Average Temp: {summary.avgTemp}°C</p>
      <p>Max Temp: {summary.maxTemp}°C</p>
      <p>Min Temp: {summary.minTemp}°C</p>
      <p>Dominant Condition: {summary.dominantCondition}</p>
    </div>
  );
};

export default DailySummary;
