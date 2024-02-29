import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useColorScheme } from 'nativewind'
import Icon from 'react-native-vector-icons/MaterialIcons'
import getStyles from './styles'

const Chat = () => {
  const { colorScheme } = useColorScheme()
  const styles = getStyles(colorScheme)
 

  return (
    <View style={styles.container}>
      <View style={{ height: 50 }}></View>
      <Icon name='chevron-left' size={40} style={{ marginLeft: 20 }} />
      <View style={styles.body}>
        <Text style={styles.title}>Trò chuyện</Text>
        
      </View>
    </View >
  )

}

export default Chat