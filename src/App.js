import './App.css';
import React from 'react';
import Header from './components/Header'
import WeatherSearch from './components/WeatherSearch'
import WeatherData from './components/WeatherData'
import Error from './components/Error'

class App extends React.Component {
  state={
    weather:null,
    showError:false,
    message:''
  }

  weathersearch_api= async (e)=>{
    e.preventDefault()
    const location=e.target.elements.location.value;
    if(location){
      const API_KEY = "9c3cb98520f309bd159e77512e8e5e28"
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      const res=await fetch(url);
      const data=await res.json();
      data.cod!=="404"?this.setState({weather:data,showError:false}):this.setState({showError:true,message:data.message});
    }
    else{
      this.setState({showError:true,message:'Please enter the name of the city.'})
    }
    //console.log(this.state.weather)
  }
  render() {
    return (
      <>
      <Header/>
      <WeatherSearch api_call={this.weathersearch_api} />
      {this.state.weather &&  <WeatherData weatherData={this.state.weather}/>}
      {this.state.showError && <Error message={this.state.message}/>}
      </>
    );
  }
}

export default App;
