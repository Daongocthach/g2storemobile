import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { useColorScheme } from 'nativewind'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as Progress from 'react-native-progress'
import getStyles from './styles'
import showAlertOk from '../../../components/Alert/AlertOk'
import { FIREBASE_AUTH } from '../../../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function Register() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { colorScheme } = useColorScheme()
  const styles = getStyles(colorScheme)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [loading, setLoading] = useState(false)
  const auth = FIREBASE_AUTH
  const handleRegister = async () => {
    if (email == '' || password == '') {
      showAlertOk('Bạn chưa điền đầy đủ thông tin', 'Bấm Ok để tiếp tục')
    }
    else if (password !== rePassword) {
      showAlertOk('Mật khẩu không trùng khớp', 'Bấm Ok để tiếp tục')
    }
    else if (password.length < 6) {
      showAlertOk('Mật khẩu tối thiểu 6 ký tự', 'Bấm Ok để tiếp tục')
    }
    else {
      setLoading(true)
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        console.log(response)
        setTimeout(() => {
          showAlertOk('Đăng ký thành công', 'Đăng nhập để tiếp tục')
          navigation.navigate('Login')
        }, 1000)
      } catch (error) {
        console.log(error)
        showAlertOk('Đăng ký thất bại', 'Vui lòng kiểm tra lại thông tin')
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
        <Text style={styles.title}>Đăng ký</Text>
        {loading && <View style={{ alignItems: 'center' }}>
          <Progress.Circle size={80} indeterminate={true} borderWidth={3} />
        </View>}
        <View style={{ ...styles.flexView, marginHorizontal: 20, marginTop: 40 }}>
          <TextInput style={styles.input} placeholder='Nhập email' placeholderTextColor={'#BBBBBB'} onChangeText={setEmail} value={email} />
        </View>
        <View style={{ ...styles.flexView, marginHorizontal: 20 }}>
          <TextInput style={styles.input} placeholder='Nhập họ và tên' placeholderTextColor={'#BBBBBB'} onChangeText={setEmail} value={email} />
        </View>
        <View style={{ ...styles.flexView, marginHorizontal: 20 }}>
          <TextInput style={styles.input} placeholder='Nhập số điện thoại' placeholderTextColor={'#BBBBBB'} onChangeText={setEmail} value={email} />
        </View>
        <View style={{ ...styles.flexView, marginHorizontal: 20 }}>
          <TextInput style={styles.input} secureTextEntry={true} placeholder='Nhập mật khẩu' placeholderTextColor={'#BBBBBB'} onChangeText={setPassword} value={password} />
        </View>
        <View style={{ ...styles.flexView, marginHorizontal: 20 }}>
          <TextInput style={styles.input} secureTextEntry={true} placeholder='Xác nhận mật khẩu' placeholderTextColor={'#BBBBBB'} onChangeText={setPassword} value={password} />
        </View>
        <TouchableOpacity style={styles.buttonSubmit} onPress={handleRegister}>
          <Text style={{ ...styles.text, color: 'white' }}>Tạo tài khoản</Text>
        </TouchableOpacity>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ ...styles.textTitle, textAlign: 'right' }} onPress={() => { navigation.navigate('Login') }}>Bạn đã có tài khoản ? Đăng nhập ?</Text>
        </View>
      </View>
    </View >
  )
}

export default Register