import { Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import { useState } from 'react'
import { useColorScheme } from 'nativewind'
import getStyles from './styles'
import ProductHome from '../../components/Product/ProductHomeNew'
import { mockData } from '../../apis/mockdata'
import Voucher from './Voucher/Voucher'
import ProductHomeSale from '../../components/Product/ProductHomeSale'
import Header from '../../components/Header/Header'

const { width, height } = Dimensions.get('window')

const Home = () => {
  const navigation = useNavigation()
  const { colorScheme } = useColorScheme()
  const styles = getStyles(colorScheme)
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Header/>
        <ScrollView>
          <View style={{ height: height/4, backgroundColor: 'white', paddingLeft: 20 }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20 }}>
              <Text className='text-xl font-bold' >Sản phẩm mới</Text>
              <TouchableOpacity className='flex-row items-center' onPress={() => { navigation.navigate('ProductsScreen') }}>
                <Text className='text-base font-bold text-red-400' >Xem thêm</Text>
                <Icon name='arrow-right' size={25} color={'#FE555D'} />
              </TouchableOpacity>
            </View>
            <ScrollView horizontal={true}>
              <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                {mockData?.products.map((product, index) => (
                  <ProductHome product={product} key={index} />
                ))
                }
              </View>
            </ScrollView>
          </View>
          <View style={{ height: height/5, backgroundColor: 'white', paddingLeft: 20 }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20 }}>
              <Text className='text-xl font-bold' >Trạm voucher</Text>
              <TouchableOpacity className='flex-row items-center'>
                <Text className='text-lg font-bold text-red-400' >Xem thêm</Text>
                <Icon name='arrow-right' size={25} color={'#FE555D'} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              {mockData?.promotions.map((promotion, index) => (
                <Voucher voucher={promotion} key={index} />
              ))
              }
            </View>
          </View>
          <View style={{ flex: 3, backgroundColor: '#EEEEEE', paddingLeft: 20, paddingBottom: 3 }}>
            <Text className='text-xl font-bold' >Giảm giá</Text>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              {mockData?.products.map((product, index) => (
                <ProductHomeSale product={product} key={index} style={{ flex: '1 1 50%' }} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View >
  )

}

export default Home
