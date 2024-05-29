import React from "react"
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from "../RowText"
import {weatherType} from '../../utilities/weatherType'
const CurrentWeather = ( { weatherData, fetchweatherDataByCity }) => {
  const {
    wrapper, 
    container, 
    tempStyles, 
    feel, 
    highLowWrapper, 
    highLow,
    bodyWrapper, 
    description, 
    message,
    additionalInfoWrapper,
    additionalInfo
  } = styles

  const { 
    main: { temp, feels_like, temp_max, temp_min, pressure, humidity}, 
    weather
  } = weatherData

  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView 
      style = {[
        wrapper, 
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor}
      ]}
    >
      <View style = {container}>
        <Feather 
          name = {weatherType[weatherCondition]?.icon}
          size = {100} 
          color = "white" 
        />
        <Text style = {tempStyles}>{`${temp}°C`}</Text>
        <Text style = {feel}>{`Feels like ${feels_like}°C`}</Text>
        <RowText 
          messageOne= {`High: ${temp_max}°C  `} 
          messageTwo = { `Low: ${temp_min}°C`} 
          containerStyles = {highLowWrapper} 
          messageOneStyles = {highLow} 
          messageTwoStyles = {highLow}
        />
      </View>
      <View style={additionalInfoWrapper}>
        <Text style={additionalInfo}>{`Pressure: ${pressure} hPa`}</Text>
        <Text style={additionalInfo}>{`Humidity: ${humidity}%`}</Text>
      </View>
      <RowText 
        messageOne = {weather[0]?.description} 
        messageTwo = {weatherType[weatherCondition]?.message} 
        containerStyles = {bodyWrapper} 
        messageOneStyles = {description} 
        messageTwoStyles = {message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:40
  },
  tempStyles: {
    color: 'black',
    fontSize: 48,
    alignItems: 'center',
    flexWrap: 'wrap',
    fontFamily: 'serif',
    marginTop:30

  },
  feel: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'serif',
    marginTop:20
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row',
    marginTop:15
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft:25,
    marginBottom: 40
  },
  description: {
    fontSize: 43,
    fontFamily: 'serif'
  },
  message: {
    fontSize: 25,
    fontFamily: 'serif'
  },
  additionalInfoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  additionalInfo: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'serif'
  }
}
)
export default CurrentWeather