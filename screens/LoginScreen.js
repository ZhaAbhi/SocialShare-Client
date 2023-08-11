import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {colors} from '../utils/colors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AuthHeader from '../components/AuthHeader';

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.main}>
        <AuthHeader greet="Welcome Back" subGreet="Glat to see you again!" />
        <Text style={styles.loginText}>Log In</Text>
        <View style={styles.input}>
          <AppTextInput placeholder="Email" />
          <AppTextInput placeholder="Password" />
        </View>
        <View style={styles.footer}>
          <AppButton title="Login" />
          <View style={styles.createAccount}>
            <Text style={styles.createAccountText}>Don't have an account?</Text>
            <TouchableOpacity activeOpacity={0.8}>
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
