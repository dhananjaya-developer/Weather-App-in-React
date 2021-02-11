import React from "react";

function WeatherDetails({ main }) {
  return (
    <div className="weather-details">
      <p className="weather-detail">Pressure: ${main.pressure}</p>
      <p className="weather-detail">Humidity: ${main.humidity}</p>
    </div>
  );
}

export default WeatherDetails;
