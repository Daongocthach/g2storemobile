import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
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

const Home = () => {
  const navigation = useNavigation()
  const { colorScheme } = useColorScheme()
  const styles = getStyles(colorScheme)
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={{ height: 50, backgroundColor: '#EEEEEE' }}></View>
        <View style={{ height: 50, backgroundColor: '#EEEEEE', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
          <Icon name='menu' size={30} style={{ marginLeft: '10px', flex: 1 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', flex: 5, height: '90%', paddingLeft: 10, borderRadius: 30, gap: 5, borderColor: '#828282', borderWidth: 1 }}>
            <Icon1 name='search' size={25} style={{ color: 'gray' }} />
            <TextInput style={styles.input} className="text-black" placeholder='Search...' />
          </View>
          <View style={{ flex: 1, paddingLeft: 5 }}>
            <Icon name='cart' size={30} />
          </View>
        </View>
        <View style={{ height: 50, paddingLeft: 20, backgroundColor: '#EEEEEE' }}>
          <Text className='text-xl font-bold' >G2 Store Xin Chào, Thach.</Text>
        </View>
        <ScrollView>
          <View style={{ height: 200, backgroundColor: 'white', paddingLeft: 20 }}>
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
          <View style={{ height: 130, backgroundColor: 'white', paddingLeft: 20 }}>
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
          <View style={{ flex: 3, backgroundColor: '#EEEEEE', paddingLeft: 20 }}>
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
