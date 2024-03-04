import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { useColorScheme } from 'nativewind'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Progress from 'react-native-progress'
import getStyles from './styles'
import showAlertOk from '../../../components/Alert/AlertOk'
import { FIREBASE_AUTH } from '../../../../firebase'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import { login } from '../../../redux/actions/auth'

function Login() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { colorScheme } = useColorScheme()
  const styles = getStyles(colorScheme)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const currentUser = useSelector(state => state.auth)
  const auth = FIREBASE_AUTH
  const handleLogin = async () => {
    if (email == '' || password == '') {
      showAlertOk('Bạn chưa điền đầy đủ thông tin', 'Bấm Ok để tiếp tục')
    }
    else {
      setLoading(true)
      try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        const data = {
          uid: response.user.uid,
          email: response.user.email
        }
        dispatch(login(data))
        showAlertOk('Đăng nhập thành công', 'Bấm Ok để tiếp tục')
        navigation.navigate('Cài đặt')
      } catch (error) {
        console.log(error)
        showAlertOk('Lỗi đăng nhập', 'Sai tài khoản hoặc mật khẩu')
      } finally {
        setLoading(false)
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={{ height: 50 }}></View>
      <Icon name='chevron-left' size={40} style={{ marginLeft: 20 }} />
      <View style={styles.body}>
        <Text style={styles.title}>Đăng nhập</Text>
        {loading && <View style={{ alignItems: 'center' }}>
          <Progress.Circle size={80} indeterminate={true} borderWidth={3} />
        </View>}
        <View style={{ ...styles.flexView, marginHorizontal: 20, marginTop: 40 }}>
          <TextInput style={styles.input} placeholder='Nhập email' placeholderTextColor={'#BBBBBB'} onChangeText={setEmail} value={email} />
        </View>
        <View style={{ ...styles.flexView, marginHorizontal: 20 }}>
          <TextInput style={styles.input} secureTextEntry={true} placeholder='Nhập mật khẩu' placeholderTextColor={'#BBBBBB'} onChangeText={setPassword} value={password} />
        </View>
        <TouchableOpacity style={styles.buttonSubmit} onPress={handleLogin}>
          <Text style={{ ...styles.text, color: 'white' }}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSubmit} onPress={handleLogin}>
          <Text style={{ ...styles.text, color: 'white' }}>Hoặc đăng nhập với tài khoản Google</Text>
        </TouchableOpacity>
        <View style={{ ...styles.flexView, marginHorizontal: 20 }}>
          <Text style={styles.textTitle} onPress={() => { navigation.navigate('ForgotPassword') }}>Quên mật khẩu ?</Text>
          <Text style={{ ...styles.textTitle, textAlign: 'right' }} onPress={() => { navigation.navigate('Register') }}>Đăng ký ?</Text>
        </View>
      </View>
    </View >
  )
}

export default Login