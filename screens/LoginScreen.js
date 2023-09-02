import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {colors} from '../utils/colors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AuthHeader from '../components/AuthHeader';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import {api} from '../config/api';
import AsyncStore, {store} from '../utils/asyncStore';

const LoginScreen = ({navigation}) => {
  const {setLoggedIn} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    await axios({
      method: 'post',
      url: api.login,
      data: {
        email,
        password,
      },
    })
      .then(res => {
        if (res.status === 201) {
          store(res.data.accessToken);
          setLoggedIn(true);
        }
      })
      .catch(error => {
        return Alert.alert(error.response.data.error);
      });
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.main}>
        <AuthHeader greet="Welcome Back" subGreet="Glad to see you again!" />
        <Text style={styles.loginText}>Log In</Text>
        <View style={styles.input}>
          <AppTextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <AppTextInput
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={styles.footer}>
          <AppButton title="Login" onPress={handleLogin} />
          <View style={styles.createAccount}>
            <Text style={styles.createAccountText}>Don't have an account?</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.register}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.blue,
    flex: 1,
    padding: 10,
  },
  loginText: {
    marginTop: '20%',
    fontSize: 25,
    color: colors.eelightgray,
  },
  input: {
    marginTop: '5%',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  createAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
  },
  createAccountText: {
    color: colors.eelightgray,
    fontSize: 18,
  },
  register: {
    marginLeft: 5,
    color: colors.eelightgray,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default LoginScreen;
