import React, { useState } from "react";
import axios from "axios";
import WeatherDetails from "./WeatherDetails"; // Import the new child component

const App = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/weather", {
        params: { location },
      });
      setWeather(response.data);
      setError("");
    } catch (err) {
      setWeather(null);
      setError("Failed to fetch weather data. Please try again.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter location (e.g., Melbourne,AU)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ padding: "10px", marginRight: "10px", width: "300px" }}
        />
        <button
          onClick={fetchWeather}
          style={{
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Get Weather
        </button>
      </div>
      {weather && <WeatherDetails weather={weather} />}{" "}
      {/* Pass weather data as a prop */}
      {error && <div style={{ color: "red", marginTop: "20px" }}>{error}</div>}
    </div>
  );
};

export default App;
