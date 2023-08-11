import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {colors} from '../utils/colors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AuthHeader from '../components/AuthHeader';

const RegisterScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.main}>
        <AuthHeader
          greet="Create Account"
          subGreet="A platform to share and connect!"
        />
        <Text style={styles.registerText}>Register</Text>
        <View style={styles.input}>
          <AppTextInput placeholder="Username" />
          <AppTextInput placeholder="Email" />
          <AppTextInput placeholder="Password" />
          <AppTextInput placeholder="Confirm Password" />
        </View>
        <View style={styles.footer}>
          <AppButton title="Register" />
          <View style={styles.alreadyAccount}>
            <Text style={styles.alreadyAccountText}>
              Already have an account?
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.blue,
    flex: 1,
    padding: 10,
  },
  registerText: {
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
  alreadyAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
  },
  alreadyAccountText: {
    color: colors.eelightgray,
    fontSize: 18,
  },
  login: {
    marginLeft: 5,
    color: colors.eelightgray,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default RegisterScreen;
