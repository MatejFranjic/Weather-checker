import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{

	renderWeather(cityData){
		console.log('entered the function');
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		//console.log(temps);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		//const lon = cityData.city.coord.lon;
		//const lat = cityData.city.coord.lat;
		//ES6 SYNTAX - what's the catch? -> The name of consts(variables) HAS TO BE THE SAME AS THOSE PROPERTIES WE ARE TRYING TO ACCESS
		const { lon, lat } = cityData.city.coord;
		
		return (
			<tr key={ name }>
				<td> <GoogleMap lon={ lon } lat={ lat } /> </td>
				<td> <Chart data={temps} color="red" units="K"/>	</td>				
				<td> <Chart data={humidities} color="brown" units="hPa"/>	</td>				
				<td> <Chart data={pressures} color="blue" units="%"/>	</td>				
			</tr>
		);
	}

	render(){
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>					
					{ this.props.weather.map(this.renderWeather) }
				</tbody>
			</table>
		);
	}

}

function mapStateToProps({weather}){
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);