import React from 'react'
import {View, ScrollView} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../../layout/header/Header';
import styles from './home.style';
import Card from './card/card';
import FooterNav from '../../layout/footer/FooterNav';


const Stack = createStackNavigator();

const Home = ({navigation}) => {
  return (

    <View style={{flex: 1}}>
        <LinearGradient
        colors={['#219BD3', '#0C588A']}
        locations={[0, 1]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={{flex: 1}}
      >
        <Header />

        <View style={styles.container}>
            <ScrollView>
                <View style={styles.cardContainer}>
                    <Card 
                        icon="engine" 
                        title="Motor" 
                        desc="Motor söndürülmüş vəziyyətdədir." 
                        currentStatus="off"
                    />

                    <Card 
                        icon="pool" 
                        title="Hovuz" 
                        desc="Su sərfiyyatı:" 
                        currentStatus="full"
                        waterConsumption="125l / san"
                    />

                    <Card 
                        icon="areaIrrigaton" 
                        title="Ərazi sulanması" 
                        desc="Su sərfiyyatı:" 
                        currentStatus="working"
                        waterConsumption="125l / san"
                    />
                    
                    
                </View>
            </ScrollView>
        </View> 

        <FooterNav navigation={navigation} />
        </LinearGradient>
    </View>

  )
}

export default Home

