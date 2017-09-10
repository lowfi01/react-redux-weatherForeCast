import axios from 'axios';

const API_KEY = '76c902273882d24504f8aa3d6d2a9939';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`



// Create a action type variable - #this is for debugging purposes.
export const FETCH_WEATHER = 'FETCH_WEATHER'


// API - url request requires, {city_name} & {country_code}
// #challenge - we must find the city code
// Action - fetch API
export function fetchWeather(city) {
    // make country code static for now
    const countryCode = 'us'
    const url = `${ROOT_URL}&q=${city},${countryCode}`;

    // Use axios to make a get request
    // Note - we are receiving a promise back... so request.then().catch() will work
    const request = axios.get(url)


    console.log(`Request: `, request)

    return {
        type: FETCH_WEATHER,
        // Send promise back as payload
        payload: request
    };
}