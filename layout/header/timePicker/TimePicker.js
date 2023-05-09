import { View, Text, StyleSheet, Button,} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useEffect, useState } from 'react'

const TimePicker = ({setTimer, showTime, setShowTime}) => {
    const [newDate, setNewDate] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState()
    const [text, setText] = useState('Empty')

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || newDate;
        if (Platform.OS === 'android') {
            setShow(false);
        }
        let tempDate = new Date(currentDate);
        let hours = tempDate.getHours()
        let minutes = tempDate.getMinutes()
        if(hours === 0 && minutes === 0) {
            setTimer(null)
        }
        setTimer(3600 * hours + 60 * minutes)
        setShowTime(false)

        // console.log('hours: ' + hours);
        // console.log('minutes: ' + minutes);

    }

    useEffect(() => {
        setShow(showTime)
        setMode(showTime && 'time')
    }, [showTime])

  return (
    <View style={{position: 'absolute'}}> 
        {show && (<DateTimePicker 
            testID='dateTimePicker'
            value={newDate}
            mode={mode}
            is24Hour={true}
            display='default'
            onChange={onChange}
        />)}
    </View>
  )
}

export default TimePicker