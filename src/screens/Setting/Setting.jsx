import { Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
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
      <View style={{ height: 50 }}></View>
      <Icon name='chevron-left' size={30} style={{ marginLeft: 20 }} />
      <View style={styles.body}>
        <Text style={styles.title}>Thông tin tài khoản</Text>
        {/* <Image source={{
          uri: 'https://th.bing.com/th/id/OIP.UMHEZL98_x0iMj6tYeLPUgHaHp?rs=1&pid=ImgDetMain'
        }} style={{ height: 100, width: 100, borderRadius: 50, marginTop: 20 }} /> */}
        <Text className='text-xl font-semibold'>Đào Ngọc Thạch</Text>
        <Text className='text-lg mb-4'>Id: 1</Text>
      </View>
      <View className='gap-5'>
        <View className='flex-row justify-between items-center'>
          <Icon name='login' size={30} style={{ marginLeft: 20, flex: 1 }} />
          <Text className='text-xl font-semibold text-gray-600' style={{ flex: 4 }}>Đăng nhập</Text>
        </View>
        <View className='flex-row justify-between items-center'>
          <Icon name='account-plus-outline' size={30} style={{ marginLeft: 20, flex: 1 }} />
          <Text className='text-xl font-semibold text-gray-600' style={{ flex: 4 }}>Đăng ký</Text>
        </View>
      </View>
    </View>
  )

}

export default Setting
