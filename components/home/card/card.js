import React, { useEffect, useState } from 'react'
import {View, Text, Image, TouchableOpacity } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../../../layout/header/Header';
import { EngineIcon, PoolIcon, AreaIrrigationIcon } from '../../../assets/icons/icons';
import styles from './card.style';

const Card = ({icon, title, desc, currentStatus, waterConsumption}) => {

    const [btnBgColor, setBtnBgColor] = useState('rgba(113, 113, 113, 0.5)')

    useEffect(() => {
        setBtnBgColor(() => {
            switch(currentStatus) {
                case 'off':
                    return 'rgba(113, 113, 113, 0.5)';
                case 'full':
                    return ' rgba(12, 88, 138, 0.6)';
                case 'working':
                    return 'rgba(47, 166, 64, 0.6)';
                case 'notworking':
                    return 'rgba(238, 68, 57, 0.8)';
                case 'empty':
                    return 'rgba(238, 68, 57, 0.8)';
                case 'notToWater':
                    return 'rgba(238, 68, 57, 0.8)';
                default:
                    return 'rgba(113, 113, 113, 0.5)';
            }
        })
    }, [currentStatus])

  return (
    <View style={styles.card}>
        <View style={styles.cardTop}>
            {icon == 'engine' && <EngineIcon />}
            {icon == 'pool' && <PoolIcon />}
            {icon == 'areaIrrigaton' && <AreaIrrigationIcon />}
            
            <Text style={styles.cardTitle}>{title}</Text>
        </View>

        <View style={styles.cardBody}>
            <Text style={styles.cardDesc}>{desc}</Text>
            <Text style={styles.cardDescBold}>{waterConsumption}</Text>
        </View>

        <View style={styles.cardBottom}>
            <Text style={styles.cardBottomText(btnBgColor)}>
                {currentStatus == 'off' && "Söndürülüb"}
                {currentStatus == 'full' && "Doludur"}
                {currentStatus == 'working' && "İşləyir"}
                {currentStatus == 'notworking' && "İşləmir"}
                {currentStatus == 'empty' && "Boşdur"}
                {currentStatus == 'notToWater' && "Suvarılmır"}
            </Text>
        </View>
    </View>

  )
}

export default Card

