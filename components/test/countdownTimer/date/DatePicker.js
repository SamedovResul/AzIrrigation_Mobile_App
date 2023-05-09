import { View, Text, StyleSheet, Button,} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useEffect, useState } from 'react'

const DatePicker = () => {

    const [newDate, setNewDate] = useState(new Date())
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [text, setText] = useState('Empty')


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || newDate;
        
        if (Platform.OS === 'android') {
            setShow(false);
        }
        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();

        setText(fDate + '\n' + fTime);

        console.log(fDate + '(' + fTime + ')');
    }

    const showMode = (currentMode) => {
        setShow(true)
        setMode(currentMode)
    }
    
  return (
    <View style={styles.container}> 
        <Text>DatePicker</Text>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{text}</Text>
        <View style={{margin: 20}}>
            <Button title='DatePicker' onPress={() => showMode('date')} />
        </View>
        <View style={{margin: 20}}>
            <Button title='TImePicker' onPress={() => showMode('time')} />
        </View>

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

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default DatePicker