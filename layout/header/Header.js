import React, { useState } from 'react'
import { TouchableOpacity, Text, View} from 'react-native'
import styles from './header.style'
import { LogoIcon, OnOffIcon } from '../../assets/icons/icons'

const Header = () => {
  let [working, setWorking] = useState(false)

  return (
    <View style={styles.container}>
      <LogoIcon />

      <TouchableOpacity onPress={() => setWorking(!working)} style={styles.onofIcon(working ? 'rgba(223, 58, 56, 0.9)' : 'rgba(47, 166, 64, 0.9)')}>
        <OnOffIcon />
      </TouchableOpacity>

      <Text style={styles.time}>00:00</Text>

    </View>
  )
}

export default Header;