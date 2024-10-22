import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDisplay = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend
        axios.get('http://localhost:8080/weather')  // Replace with your backend URL
            .then(response => {
                setWeatherData(response.data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }, []);

    return (
        <div>
            <h2>Weather Data</h2>
            <ul>
                {weatherData.map((weather, index) => (
                    <li key={index}>
                        City: {weather.city}, Temp: {weather.tempCelsius}°C, Condition: {weather.condition}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WeatherDisplay;
