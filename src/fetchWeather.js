import axios from 'axios';
require('dotenv').config();

const URL = 'https://api.openweathermap.org/data/2.5/weather';
console.log(process.env);
// const API_KEY = 'f645e9b392ffea26bcdc2733a158d3b0';
console.log(process.env);
export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: process.env.REACT_APP_SPLASH_KEY,
        }
    });
    console.log(process.env);
    console.log(data);

    return data;
}
