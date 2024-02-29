import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomNavigation from './BottomNavigation'
import Home from '../../screens/Home/Home'
import Setting from '../../screens/Setting/Setting'
import Chat from '../../screens/Chat/Chat'
import Notification from '../../screens/Notification/Notification'

const Tab = createBottomTabNavigator()
function TabScreens() {
    return (
        <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />}>
            <Tab.Screen name="Trang chủ" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Hỏi đáp" component={Chat} options={{ headerShown: false }} />
            <Tab.Screen name="Thông báo" component={Notification} options={{ headerShown: false }} />
            <Tab.Screen name="Tài khoản" component={Setting} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}
export default TabScreens