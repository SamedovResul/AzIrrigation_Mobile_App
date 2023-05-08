import { View, Text, Platform, StyleSheet, StatusBar } from 'react-native'
// import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useEffect, useState } from 'react'


const Date = () => {
    const [date, setDate] = useState()
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [text, setText] = useState('Empty')



    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'android');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours' + tempDate.getHours() + '| Minutes' + tempDate.getMinutes();

        setText(fDate + '\n' + fTime);

        console.log(fDate + '(' + fTime + ')');
    }

    const showMode = (currentMode) => {
        setShow(true)
        setMode(currentMode)
    }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Text>test</Text>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Date