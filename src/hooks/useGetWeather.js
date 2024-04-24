import React,  {useState, useEffect} from 'react'
import * as Location from 'expo-location'
import {WEATHER_API_KEY} from '@env'

export const useGetWeather = (city = null) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [weather, setWeather] =useState([])
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])

    const fetchWeatherData = async (city = null) => {
        try {
            let apiUrl;

            if (city) {
                // If a city is provided, use the city-based API endpoint
                apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;
            } else {
                apiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
            }
            const res = await fetch(apiUrl)
            const data = await res.json()
            setWeather(data)
        } catch (e) {
            setError('Could not fetch weather')
    
        } finally {
            setLoading(false)
        }
    } 
    useEffect(() => {
        ;(async() => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setError('permission to access location was denied')
                return
            }
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy:true})
            setLat(location.coords.latitude)
            setLon(location.coords.longitude)
            await fetchWeatherData()
        })()
    }, [])
    useEffect(() => {
        if (city !== null) {
          // If a city is provided, fetch weather data based on the city
          fetchWeatherData(city);
        } else if (lat !== null && lon !== null) {
          // If no city is provided, and location is available, fetch weather data based on the location
          fetchWeatherData();
        }
      }, [city, lat, lon]);
      
      return [loading, error, weather];
}