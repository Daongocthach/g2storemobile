import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useState } from 'react'
import { useColorScheme } from 'nativewind'
import getStyles from './styles'
const products = [
  {
    id: 1,
    name: 'Yến sào Khánh Hòa',
    price: 200000,
    image: 'https://i.imgur.com/y78zQzL.png',
    rating: 4.9,
    reviews: 10
  },
  {
    id: 2,
    name: 'Sữa Milo 180ml',
    price: 30000,
    image: 'https://i.imgur.com/QzFz123.png',
    rating: 5.0,
    reviews: 24
  }
]

const Home = () => {
  const navigation = useNavigation()
  const { colorScheme } = useColorScheme()
  const styles = getStyles(colorScheme)
  return (
    <View className='flex-1 bg-white mt-6'>
      <View style={styles.header} >
        <Icon name='menu' size={25} color={colorScheme == 'dark' ? '#AAAAAA' : 'black'} />
        <View className=''>

        </View>
        <Icon name='cart' size={25} color={colorScheme == 'dark' ? '#AAAAAA' : 'black'} />
      </View>
      <View style={styles.body}>
        <View className="flex-1 bg-white">
          <Text className='text-black ml-2 font-bold s'>G2 Store, Xin Chào Thạch</Text>
          <StatusBar style="auto" />
        </View>
      </View>
      <View style={styles.footer}>
      </View>
    </View >
  )

}

export default Home
