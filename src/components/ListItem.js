import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'
import moment from 'moment'
import { Platform } from 'react-native'
import {weatherType } from '../utilities/weatherType'
const ListItem = (props) => {
    const {dt_txt, min, max, condition} = props
    const{ item, date, temp, dateTextWrapper } = styles
    return (
        <View style = {item}>
            <Feather name = {weatherType[condition]?.icon} size = {50} color = {'black'} />
            <View style = {dateTextWrapper}>
                <Text style = {date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style = {date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            <Text style = {temp}>{`${Math.round(min)}°/${Math.round(max)}°` }</Text>
          
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        borderColor: 'white'
        
    },
    temp: {
        color: 'black',
        fontSize: 14,
        fontFamily: Platform.OS === 'android' ? 'serif' : 'System'
    },
    date: {
        color: 'black',
        fontSize: 14,
        fontFamily: Platform.OS === 'android' ? 'serif' : 'System'
    },
    dateTextWrapper: {
        flexDirection: 'column'
    }
})

export default ListItem