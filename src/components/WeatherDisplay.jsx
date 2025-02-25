import React from "react";

const WeatherDisplay = ({ data }) => {
  const weather = data.weather[0];
  const iconUrl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  const backgroundStyle = {
    backgroundImage: `url(https://source.unsplash.com/1600x900/?${weather.main})`,
    backgroundSize: "cover",
    padding: "20px",
    borderRadius: "10px",
    color: "white",
    textShadow: "2px 2px 4px #000000",
  };

  return (
    <div className="containers">
    <div id="background" style={backgroundStyle}>
      <h2>{data.name}, {data.sys.country}</h2>
      <img src={iconUrl} alt={weather.description} />
      <p>{weather.description}</p>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
    </div>
  );
};

export default WeatherDisplay;