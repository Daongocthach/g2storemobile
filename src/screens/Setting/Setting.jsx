import { Text, View, TouchableOpacity, Alert, Switch } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useColorScheme } from 'nativewind'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getStyles from './styles'

const Setting = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const styles = getStyles(colorScheme)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cài đặt</Text>
      </View>
      <View style={{ ...styles.body, backgroundColor: colorScheme == 'dark' ? 'black' : 'white' }}>
      
      </View>
    </View>
  )

}

export default Setting
