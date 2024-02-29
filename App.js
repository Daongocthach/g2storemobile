import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/store.js'
import TabScreens from './src/components/BottomTab/TabScreens'
import Theme from './theme'
import Login from './src/screens/Auth/Login/Login.jsx'
import Register from './src/screens/Auth/Register/Register.jsx'
import ProductsScreen from './src/screens/ProductsScreen/ProductsScreen.jsx'
import ProductDetailScreen from './src/screens/ProductDetailScreen/ProductDetailScreen.jsx'

const Stack = createNativeStackNavigator()
export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={Theme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Tabs"
              component={TabScreens}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductsScreen"
              component={ProductsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetailScreen"
              component={ProductDetailScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )

}
