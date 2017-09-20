import React, { Component } from 'react';
import { connect } from 'react-redux';


import Chart from './../components/chart';


class WeatherList extends Component{
    
    renderWeather(cityData){
        const city = cityData.city

        // as this function is being called in map
        // we will receive the element as the argument
        // in this case this is the cities 5 day forecast information
        const temps = cityData.list.map(weather => weather.main.temp);  // return temp for city
        console.log(temps);
        
        return(
        <tr key={city.id}>
            <td>{city.name}</td>
            <td> 
                <Chart data={temps} color="orange" />
            </td>
            <td>
                
            </td>
        </tr>
        )
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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