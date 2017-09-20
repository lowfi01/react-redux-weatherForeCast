import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


import Chart from './../components/chart';
import GoogleMap from './../components/google-map'


class WeatherList extends Component{
    
    renderWeather(cityData){
        const city = cityData.city
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;

        // es6 de-structuring 
        const { lon, lat } = cityData.city.coord;

        // as this function is being called in map
        // we will receive the element as the argument
        // in this case this is the cities 5 day forecast information
        // const temps = cityData.list.map(weather => weather.main.temp);  // return temp for city

        // convert the temperature from kelvin to fahrenheit 
        //const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * 9/5 - 459.67); 
        
        // convert to kelvin to celsius
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15); 

         
       
        //console.log(temps);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return(
        <tr key={city.id}>
        <td> <GoogleMap lon={lon} lat={lat} /> </td>
            <td><Chart data={temps} color="orange" units="°C" /></td>
            <td><Chart data={pressures} color="orange" units="hPa" /></td>
            <td><Chart data={humidities} color="black" units="%" /></td>
        </tr>
        )
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City </th>
                        <th>Temperature (°C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather.bind(this))}
                    </tbody>
            </table>
        )
    }
}

function mapStateToProps(state){
    return{
        //Note - This is still the array 
        weather: state.weather
    }
}

// function mapStateToProps({weather}}) {
//     return {
//         weather // {weather: weather}
//     }
// }


export default connect(mapStateToProps)(WeatherList);