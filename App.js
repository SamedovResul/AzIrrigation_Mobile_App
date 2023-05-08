import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Home from './components/home/Home';
import Header from './layout/header/Header';
import Statistics from './components/statistics/Statistics';
import Notifications from './components/notifications/Notifications';
import Settings from './components/settings/Settings';

const Stack = createStackNavigator();

export default function App() {

    const [fontsLoaded] = useFonts({
    'SFproRegular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
    'SFproMedium': require('./assets/fonts/SF-Pro-Text-Medium.otf'),
    'SFproSemiBold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
    'SFproBold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
      return null;
    }
  
  return ( 
    <SafeAreaView style={{flex: 1}} onLayout={onLayoutRootView}>
      <LinearGradient
        colors={['#219BD3', '#0C588A']}
        locations={[0, 1]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={{flex: 1}}
      >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home" 
              component={Home}  
              options={{
                title: '',
                headerStyle: {backgroundColor: 'red', height: 0},
                gestureEnabled: false,
              }}
            />
            <Stack.Screen 
              name="Statistics"
              component={Statistics}  
              options={{
                title: '',
                headerStyle: {backgroundColor: 'red', height: 0},
                headerLeft: null,
              }}
            />
              <Stack.Screen 
              name="Notifications"
              component={Notifications}  
              options={{
                title: '',
                headerStyle: {backgroundColor: 'red', height: 0},
                headerLeft: null,
              }}
            />
            <Stack.Screen 
              name="Settings"
              component={Settings}  
              options={{
                title: '',
                headerStyle: {backgroundColor: 'red', height: 0},
                headerLeft: null,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
