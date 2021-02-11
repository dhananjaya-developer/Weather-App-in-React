import React from "react";

function WeatherDetails({ main ,wind}) {
  return (
    <div className="weather-details">
      <p className="weather-detail">Pressure: {main.pressure}</p><br/>
      <p className="weather-detail">Humidity: {main.humidity}</p><br/>
      <p className="weather-detail">Wind Speed: {wind.speed}</p>
    </div>
  );
}

export default WeatherDetails;
