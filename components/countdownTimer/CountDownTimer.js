import {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <View style={styles.container}>
            <Text>{remainingTime.days}</Text>
            <Text> : </Text>
            <Text>{remainingTime.hours}</Text>
            <Text> : </Text>
            <Text>{remainingTime.minutes}</Text>
            <Text> : </Text>
            <Text>{remainingTime.seconds}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CountdownTimer;