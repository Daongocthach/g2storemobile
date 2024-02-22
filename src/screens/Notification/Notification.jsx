import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useColorScheme } from 'nativewind'
import { useNavigation } from '@react-navigation/native'
import getStyles from './styles'

const Notification = () => {
  const { colorScheme } = useColorScheme()
  const styles = getStyles(colorScheme)
  const navigation = useNavigation()
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Thông báo</Text>
      </View>
      <View style={styles.body}>
        
      </View>

    </View>
  )

}

export default Notification
