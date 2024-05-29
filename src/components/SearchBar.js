import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchWeather = ({ fetchWeatherDataByCity }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeatherDataByCity(city);
      setCity('');
    }
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  TextInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default SearchWeather;
