import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { useColorScheme } from 'nativewind'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Progress from 'react-native-progress'
import { SafeAreaView } from 'react-native-safe-area-context'
import { set, ref, onValue } from 'firebase/database'
import getStyles from './styles'
import showAlertOk from '../../../components/Alert/AlertOk'
import { FIREBASE_AUTH } from '../../../../firebase'
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import { login } from '../../../redux/actions/auth'

function ForgotPassword() {
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
  const handleResetPassword = async () => {
    if (email == '') {
      showAlertOk('Điền thông tin Email để nhận mật khẩu mới', 'Bấm Ok để tiếp tục')
    } else {
      setLoading(true)
      try {
        await sendPasswordResetEmail(auth, email)
        showAlertOk('Gửi thành công', 'Email đặt lại password đã được gửi đến mail của bạn. Vui lòng kiểm tra hộp thư.')
      } catch (error) {
        console.error('Error sending password reset email:', error.message)
        showAlertOk('Gửi thất bại', 'Bấm Ok để tiếp tục.')
      }
      finally {
        setLoading(false)
      }
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>Đổi mật khẩu</Text>
        {loading && <View style={{ alignItems: 'center' }}>
          <Progress.Circle size={80} indeterminate={true} borderWidth={3} />
        </View>}
        <View style={{ ...styles.flexView, marginHorizontal: 20, marginTop: 40 }}>
          <TextInput style={styles.input} placeholder='Nhập email' placeholderTextColor={'#BBBBBB'} onChangeText={setEmail} value={email} />
        </View>
        <TouchableOpacity style={styles.buttonSubmit} onPress={handleLogin}>
          <Text style={{ ...styles.text, color: 'white' }}>Nhận OTP qua Mail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

export default ForgotPassword