import React from 'react'
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View} from 'react-native'
import moment from 'moment'
import IconText from '../../iconText'

const UrbanCity = ({weatherData}) => {
    const {
        container, 
        cityName,
        cityText,
        countryName, 
        populationWrapper, 
        populationText, 
        riseSetWrapper,
        riseSetText,
        rowLayout,
        imageLayout
    }= styles

    const { name, country, population, sunrise, sunset} = weatherData
    return (
        <SafeAreaView style = {container}>
            <ImageBackground blurRadius={90} source = {require('../../../assets/bg.png')} style = {imageLayout} >
                <Text style = {[cityName, cityText]}> {name}</Text>
                <Text style = {[countryName, cityText]}> {country}</Text>
                <View style = { [populationWrapper, rowLayout]}>
                    <IconText
                     iconName = {'user'} 
                     iconColor = {'white'}
                     bodyText = {`population: ${population}`} 
                     bodyTextStyles = {populationText}
                    />
                </View>
                <View style = {[riseSetWrapper, rowLayout]}>
                    <IconText
                     iconName = {'sunrise'}
                     iconColor = {'white'}
                     bodyText = {moment(sunrise).format('h:mm:ss a')}
                     bodyTextStyles = {riseSetText}
                    />
                    <IconText 
                    iconName = {'sunset'} 
                    iconColor = {'white'} 
                    bodyText = {moment(sunset).format('h:mm:ss a')} 
                    bodyTextStyles = {riseSetText}
                    />
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    countryName: {
       
        fontSize: 30,
    },
    cityText: {

        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 30
        
        
    },
    populationText: {
        fontSize: 25,
        color: 'white',
        marginLeft:7.5,
        fontWeight:'bold'
    },
    riseSetWrapper:{
        
        justifyContent: 'space-around',
        marginTop: 40,
    
    },
    riseSetText: {
        
        fontSize: 20,
        color: 'white',
        fontWeight:'bold'
    },
    rowLayout: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    }


})

export default UrbanCity