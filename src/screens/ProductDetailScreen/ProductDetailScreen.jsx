import { Text, View, TextInput, useWindowDimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import { TabView, TabBar } from 'react-native-tab-view'
import { useState } from 'react'
import { useColorScheme } from 'nativewind'
import getStyles from './styles'
import ProductDetail from '../../components/Product/ProductDetail'
import Details from './Details/Details'
import Review from './Review/Review'

const ProductDetailScreen = ({ route }) => {
    const navigation = useNavigation()
    const { colorScheme } = useColorScheme()
    const styles = getStyles(colorScheme)
    let product
    if (route.params.product) {
        product = route.params.product
    }
    const layout = useWindowDimensions()
    const [index, setIndex] = useState(0)
    const [routes] = useState([
        { key: 'first', title: 'Thông tin chi tiết' },
        { key: 'second', title: 'Bình luận và đánh giá' }
    ])
    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return <Details description={product?.description} />
            case 'second':
                return <Review productId={product?._id} />
            default:
                return null
        }
    }
    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={'#EE6363'}
            inactiveColor={'#696969'}
            indicatorStyle={{ backgroundColor: '#EE6363' }}
            style={{ backgroundColor: 'white' }}
            labelStyle={{ fontSize: 13, fontWeight: 'bold' }}
        />
    )
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={{ height: 50, backgroundColor: '#EEEEEE' }}></View>
                <View style={{ height: 50, backgroundColor: '#EEEEEE', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                    <Icon name='chevron-left' size={30} style={{ marginLeft: '10px', flex: 1 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', flex: 5, height: '90%', paddingLeft: 10, borderRadius: 30, gap: 5, borderColor: '#828282', borderWidth: 1 }}>
                        <Icon1 name='search' size={25} style={{ color: 'gray' }} />
                        <TextInput style={styles.input} className="text-black" placeholder='Search...' />
                    </View>
                    <View style={{ flex: 1, paddingLeft: 5 }}>
                        <Icon name='cart' size={30} />
                    </View>
                </View>
                <ScrollView>
                    <View style={{ flexDirection: 'column', alignItems: 'center', height: 400, backgroundColor: 'blue' }}>
                        <ProductDetail product={product} />
                    </View>
                    <View style={{ height: 1000, width: '100%' }}>
                        <TabView
                            navigationState={{ index, routes }}
                            renderScene={renderScene}
                            onIndexChange={setIndex}
                            renderTabBar={renderTabBar}
                            initialLayout={{ width: layout.width }}
                            indicatorStyle={{ backgroundColor: 'white' }}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <View className='flex-column items-center'>
                    <Image source={{
                        uri: product?.image
                    }} style={{ height: 30, width: 30, borderRadius: 15 }} />
                    <Text className='text-sm font-medium text-gray-600 text-right'>Gian hàng</Text>
                </View>
                <View className='flex-column items-center'>
                    <Icon name='chat-outline' size={30} color={'gray'} />
                    <Text className='text-sm font-medium text-gray-600 text-right'>Chat</Text>
                </View>
                <TouchableOpacity style={{ ...styles.buttonSubmit, backgroundColor: '#EE2C2C' }} >
                    <Text style={{ ...styles.text, color: 'white' }}>Mua hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.buttonSubmit, backgroundColor: '#31A063' }} >
                    <Text style={{ ...styles.text, color: 'white' }}>Thêm vào giỏ</Text>
                </TouchableOpacity>
            </View>
        </View >
    )

}

export default ProductDetailScreen
