import React,  {useState, useEffect} from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'
import {WEATHER_API_KEY} from '@env'
import { useGetWeather } from './src/hooks/useGetWeather'
import Error from './src/components/Error'


const App = ()  => {
  const [loading, error, weather] = useGetWeather()
  
  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather = {weather}/>
      </NavigationContainer>
    )
  }

  

  return (
    <View style = {styles.container}>
      {error ? (
        <Error/>
      ) : (
          <ActivityIndicator size = {'large'} color = {'blue'} />
      )} 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App