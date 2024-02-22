import { Text, View, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useColorScheme } from 'nativewind'
import getStyles from './styles'

const Chat = () => {
  const { colorScheme } = useColorScheme()
  const styles = getStyles(colorScheme)
 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trò chuyện</Text>
      </View>
      <View style={styles.body}>
        
      </View>

    </View>
  )

}

export default Chat