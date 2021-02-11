import './App.css';
import React from 'react';
import Header from './components/Header'
import WeatherSearch from './components/WeatherSearch'
import WeatherData from './components/WeatherData'
import Error from './components/Error'

class App extends React.Component {
  state={
    weather:null,
    showError:false
  }

  weathersearch_api= async (e)=>{
    e.preventDefault()
    const location=e.target.elements.location.value;
    if(location){
      const API_KEY = "9c3cb98520f309bd159e77512e8e5e28"
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      const res=await fetch(url);
      const data=await res.json();
      this.setState({weather:data,showError:false})
    }
    else{
      this.setState({showError:true})
    }
    //console.log(this.state.weather)
  }
  render() {
    return (
      <>
      <Header/>
      <WeatherSearch api_call={this.weathersearch_api} />
      {this.state.weather &&  <WeatherData weatherData={this.state.weather}/>}
      {this.state.showError && <Error/>}
      </>
    );
  }
}

export default App;
