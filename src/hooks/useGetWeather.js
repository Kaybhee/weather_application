import React,  {useState, useEffect} from 'react'   
import * as Location from 'expo-location'
import {API_KEY} from '@env'

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [weather, setWeather] =useState([])
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])
    // https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid=
// `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid={WEATHER_API_KEY}&units=metric`
// api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}
    const fetchWeatherData = async () => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
            const data = await response.json()
        // const data = await response.json()
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
                let location = await Location.getCurrentPositionAsync({})
                setLat(location.coords.latitude)
                setLon(location.coords.longitude)
                await fetchWeatherData()
            })()
        }, [lat, lon])
      return [loading, error, weather]
    }