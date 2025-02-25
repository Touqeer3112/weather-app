import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    const apiKey = '12a14519b3a276166c83c81a19d1c4fe';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    try {
      // const apiKey = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={91fcef8f713236539b7c2b3f8f9db3}"; // OpenWeatherMap API key
      const response = await axios.get(url);
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null);
    }
  };

  // const getWeather = async (city) => {
  //   const apiKey = 'd95ad12705b47e598744dc2e15c3fd06'; // Replace with your OpenWeather API key
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  // //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${}&appid=${apiKey}&units=metric}`;
  
  //   try {
  //     const response = await axios.get(url);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error('City not found!');
  //   }
  // };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default Weather;