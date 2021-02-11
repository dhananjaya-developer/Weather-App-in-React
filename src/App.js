import "./App.css";
import React from "react";
import Header from "./components/Header";
import WeatherSearch from "./components/WeatherSearch";
import WeatherData from "./components/WeatherData";
import Error from "./components/Error";
import { useState } from "react";

function App() {
  let [state, setState] = useState({
    weather: null,
    showError: false,
    message: "",
  });

  let timer;
  const onKeyUp = async (e) => {
    e.preventDefault();
    const location = e.target.value;

    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      API_call(location);
    }, 500);
  };

  const API_call = async (location) => {
    if (location) {
      const API_KEY = "9c3cb98520f309bd159e77512e8e5e28";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
      const res = await fetch(url);
      const data = await res.json();
      data.cod !== "404"
        ? setState({ weather: data, showError: false })
        : setState({
            weather: undefined,
            showError: true,
            message: data.message,
          });
    } else {
      setState({
        weather: undefined,
        showError: true,
        message: "Please enter the name of the city.",
      });
    }
  };
  return (
    <>
      <Header />
      <WeatherSearch api_call={onKeyUp} />
      {state.weather && <WeatherData weatherData={state.weather} />}
      {state.showError && <Error message={state.message} />}
    </>
  );
}

export default App;
