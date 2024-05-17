// services/WeatherService.js
import axios from 'axios';

const API_KEY = '804376c72e5c484996b193131241705'; // Use your WeatherAPI key
const BASE_URL = 'http://api.weatherapi.com/v1';

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.error.message : 'Unknown error';
  }
};

export const getWeatherByPostalCode = async (postalCode) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${postalCode}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data.error.message : 'Unknown error';
  }
};
