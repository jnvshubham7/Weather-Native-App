// styles/WeatherAppStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  darkMode: {
    backgroundColor: '#222',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
    color: '#333', // Dark color for light mode
  },
  darkModeText: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginRight: 8,
    color: '#333', // Dark color for light mode
    backgroundColor: '#fff', // Background color for light mode
  },
  darkModeInput: {
    color: '#fff',
    borderColor: '#666',
    backgroundColor: '#444', // Background color for dark mode
  },
  weatherContainer: {
    alignItems: 'center',
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333', // Dark color for light mode
  },
  temperature: {
    fontSize: 48,
    color: '#333', // Dark color for light mode
  },
  condition: {
    fontSize: 24,
    marginBottom: 16,
    color: '#333', // Dark color for light mode
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 16,
    color: '#666', // Medium color for light mode
  },
  detailValue: {
    fontSize: 16,
    color: '#333', // Dark color for light mode
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
  darkModeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  darkModeToggleText: {
    marginRight: 8,
    color: '#333', // Dark color for light mode
  },
});

export default styles;
