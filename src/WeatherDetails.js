import React from "react";

const WeatherDetails = ({ weather }) => {
  return (
    <div style={{ marginTop: "20px", lineHeight: "1.6" }}>
      <h2>Weather Details</h2>
      <p>
        <strong>Location:</strong> {weather.name}, {weather.sys.country}
      </p>
      <p>
        <strong>Temperature:</strong> {(weather.main.temp - 273.15).toFixed(2)}
        °C
      </p>
      <p>
        <strong>Feels Like:</strong>{" "}
        {(weather.main.feels_like - 273.15).toFixed(2)}°C
      </p>
      <p>
        <strong>Humidity:</strong> {weather.main.humidity}%
      </p>
      <p>
        <strong>Weather:</strong> {weather.weather[0].main} (
        {weather.weather[0].description})
      </p>
      <p>
        <strong>Wind Speed:</strong> {weather.wind.speed} m/s
      </p>
    </div>
  );
};

export default WeatherDetails;
