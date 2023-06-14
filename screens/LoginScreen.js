import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import AppButton from '../components/AppButton';
import {colors} from '../config/colors';
import Githublogo from '../assets/images/Githublogo.png';
import BackIcon from 'react-native-vector-icons/Ionicons';
import AppTextInput from '../components/AppTextInput';
import UnAuthenticatedHeader from '../components/UnAuthenticatedHeader';
import axios from 'axios';
import {login} from '../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const {setLoggedIn} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const storeToken = async token => {
    await AsyncStorage.setItem('accessToken', token);
  };

  const handleLogin = async () => {
    setLoading(true);
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    if (trimmedEmail === '' || trimmedPassword === '') {
      setLoading(false);
      return Alert.alert('Email and Password are required!');
    }
    const userData = {
      email: trimmedEmail,
      password: trimmedPassword,
    };
    try {
      await axios({
        url: login,
        method: 'post',
        data: userData,
      }).then(async res => {
        if (res.status === 201) {
          await storeToken(res.data.accessToken);
          setLoading(false);
          setLoggedIn(true);
        }
      });
    } catch (error) {
      setLoading(false);
      return Alert.alert(error.response.data.error);
    }
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => navigation.navigate('Welcome')}>
          <BackIcon
            name="arrow-back-sharp"
            size={20}
            color="#fff"
            style={{
              borderRadius: 50,
            }}
          />
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}>
            <UnAuthenticatedHeader
              greetText="Welcome Back"
              greetDes="Please add your credentials to continue"
            />
            <View style={styles.textInputContainer}>
              <AppTextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
              />
              <AppTextInput
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <AppButton
                title="Login"
                onPress={handleLogin}
                buffering={loading}
              />
            </View>
            <View style={styles.footerRegisterContainer}>
              <Text style={styles.dontHvAccountText}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>Register</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.orText}>-------or-------</Text>
            <View style={styles.githubLoginFooter}>
              <Text style={styles.continueWithText}>Continue with</Text>
              <TouchableOpacity>
                <View style={styles.githubLogoContainer}>
                  <Image source={Githublogo} style={styles.githubLogo} />
                  <Text>GitHub</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  backButtonContainer: {
    marginTop: 50,
    marginLeft: 10,
    zIndex: 1000,
    height: 30,
    width: 30,
    position: 'absolute',
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  scrollView: {
    marginTop: 25,
  },
  textInputContainer: {
    padding: 20,
  },
  footerRegisterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    alignItems: 'center',
  },
  dontHvAccountText: {
    marginRight: 5,
    fontFamily: 'Poppins-Light',
    fontSize: 15,
    color: colors.secondary,
  },
  registerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: colors.secondary,
  },

  orText: {
    textAlign: 'center',
  },

  githubLoginFooter: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  continueWithText: {
    marginRight: 5,
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: colors.secondary,
  },
  githubLogoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    padding: 3,
  },
  githubLogo: {
    height: 30,
    width: 30,
  },
});

export default LoginScreen;
