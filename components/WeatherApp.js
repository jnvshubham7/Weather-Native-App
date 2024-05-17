// components/WeatherApp.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, TouchableOpacity, Switch } from 'react-native';
import { getWeatherByCity, getWeatherByPostalCode } from '../services/WeatherService';
import styles from '../styles/WeatherAppStyles';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const fetchWeatherByCity = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError(err);
      console.error('City Weather Fetch Error:', err);
    }
    setLoading(false);
  };

  const fetchWeatherByPostalCode = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getWeatherByPostalCode(postalCode);
      setWeather(data);
    } catch (err) {
      setError(err);
      console.error('Postal Code Weather Fetch Error:', err);
    }
    setLoading(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <View style={[styles.container, darkMode && styles.darkMode]}>
      <Text style={[styles.title, darkMode && styles.darkModeText]}>Weather App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, darkMode && styles.darkModeInput]}
          placeholder="Enter city name"
          value={city}
          onChangeText={setCity}
          placeholderTextColor={darkMode ? '#999' : '#666'}
        />
        <Button title="Get Weather" onPress={fetchWeatherByCity} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, darkMode && styles.darkModeInput]}
          placeholder="Enter postal code"
          value={postalCode}
          onChangeText={setPostalCode}
          placeholderTextColor={darkMode ? '#999' : '#666'}
        />
        <Button title="Get Weather" onPress={fetchWeatherByPostalCode} />
      </View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {weather && (
        <View style={styles.weatherContainer}>
          <Text style={[styles.city, darkMode && styles.darkModeText]}>{weather.location.name}, {weather.location.region}, {weather.location.country}</Text>
          <Text style={[styles.temperature, darkMode && styles.darkModeText]}>{weather.current.temp_c}°C</Text>
          <Text style={[styles.condition, darkMode && styles.darkModeText]}>{weather.current.condition.text}</Text>
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Humidity:</Text>
              <Text style={[styles.detailValue, darkMode && styles.darkModeText]}>{weather.current.humidity}%</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Wind:</Text>
              <Text style={[styles.detailValue, darkMode && styles.darkModeText]}>{weather.current.wind_kph} kph</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Pressure:</Text>
              <Text style={[styles.detailValue, darkMode && styles.darkModeText]}>{weather.current.pressure_mb} hPa</Text>
            </View>
          </View>
        </View>
      )}
      <TouchableOpacity onPress={toggleDarkMode} style={styles.darkModeToggle}>
        <Text style={[styles.darkModeToggleText, darkMode && styles.darkModeText]}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={darkMode}
        />
      </TouchableOpacity>
    </View>
  );
};

export default WeatherApp;
