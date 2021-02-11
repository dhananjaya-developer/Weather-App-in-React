import React from "react";
import WeatherDetails from "./WeatherDetails";
import { useState } from "react";

function WeatherData({ weatherData }) {
  const { main, name, sys, weather } = weatherData;

  const [state, setState] = useState({
    showWeatherDetails: false,
  });

  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  
  return (
    <div className="weather-data">
      <h3 className="city-name">
        {name},{sys.country}
      </h3>
      <p className="weather-temperature">{main.temp}</p>
      <img className="weather-icon" src={weatherIcon} alt="WeatherIcon" />
      <button
        onClick={() =>
          setState({ showWeatherDetails: !state.showWeatherDetails })
        }
        className="weather-details-button"
      >
        Details
      </button>
      {state.showWeatherDetails && <WeatherDetails main={main} wind={weatherData.wind}/>}
    </div>
  );
}
//

export default WeatherData;
