import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Text, View} from 'react-native'
import styles from './header.style'
import { LogoIcon, OnOffIcon } from '../../assets/icons/icons'
import CountDown from 'react-native-countdown-component'


const Header = () => {
  const [working, setWorking] = useState(false)
  const [timer, setTimer] = useState(30)
  const [running, setRunning] = useState(false)
  const startClick = () => {
      if(working === false) {
        setWorking(true)
        setRunning(true)
      } else {
        setWorking(false)
        setRunning(false)
      }

  }


  return (
    <View style={styles.container}>
      <LogoIcon />

      <TouchableOpacity onPress={startClick} style={styles.onofIcon(working ? 'rgba(223, 58, 56, 0.9)' : 'rgba(47, 166, 64, 0.9)')}>
        <OnOffIcon />
      </TouchableOpacity>

      {/* <Text style={styles.time}>00:00</Text> */}
      <CountDown 
        id='0'
        style={{marginTop: -30}}
        size={30}
        until={20}
        // onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: 'transparent', borderWidth: 0, borderColor: '#1CC625'}}
        digitTxtStyle={{color: '#fff', fontSize: 20, fontFamily: 'SFproMedium', fontWeight: 400}}
        separatorStyle={{color: '#fff', fontSize: 20}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
        onChange={(val) => {
          console.log('val');
          console.log(val)
        }}
        running={running}
      />

    </View>
  )
}

export default Header;