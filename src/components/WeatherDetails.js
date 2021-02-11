import React from 'react'

class WeatherDetails extends React.Component{
    render(){
        const main=this.props.main;
        return(
            <div className="weather-details">
              <p className="weather-detail">Pressure: ${main.pressure}</p>
              <p className="weather-detail">Humidity: ${main.humidity}</p>
            </div>
        )
    }
}

export default WeatherDetails