import axios from 'axios';

const API_KEY = 'd42f21927a69d45d1bde77b8148e91ec';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//It takes a parameter  which will be any city the user enters in search bar
export function fetchWeather(city){
	//It had to be done like this because of their (openweathermap.org) database

	const url = `${ROOT_URL}&q=${city},hr`;
	const request = axios.get(url);
	console.log('axios passed');

	console.log('Request ', request);

	//we create a new Action and we declare a new type and pass a payload which consists of data we grab from the url we declared few lines above
	return{
		type: FETCH_WEATHER,
		payload: request
	}
}
