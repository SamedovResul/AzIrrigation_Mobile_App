import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from './footer.style'
import { HomeBoldIcon, HomeLinearIcon, ChartLinearIcon, ChartBoldIcon, NotificationLinearIcon,NotificationBoldIcon, SettingsLinearIcon, SettingsBoldIcon } from '../../assets/icons/icons'

const FooterNav = ({navigation}) => {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.linkItem} onPress={() => navigation.navigate('Home')}>
        {route.name == 'Home' ? <HomeBoldIcon /> : <HomeLinearIcon />}
        <Text style={styles.linkText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkItem} onPress={() => navigation.navigate("Statistics")}>
        {route.name == 'Statistics' ? <ChartBoldIcon /> : <ChartLinearIcon />}  
        <Text style={styles.linkText}>Statistikalar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkItem} onPress={() => navigation.navigate("Notifications")}>
        {route.name == 'Notifications' ? <NotificationBoldIcon /> : <NotificationLinearIcon />}  
        <Text style={styles.linkText}>Bildirişlər</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkItem} onPress={() => navigation.navigate("Settings")}>
        {route.name == 'Settings' ? <SettingsBoldIcon /> : <SettingsLinearIcon />}  
        <Text style={styles.linkText}>Parametrlər</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FooterNav;