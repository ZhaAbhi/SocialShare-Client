import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';
import UnAuthenticatedHeader from '../components/UnAuthenticatedHeader';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import {colors} from '../config/colors';

const RegisterScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={{flex: 1}}>
            <UnAuthenticatedHeader
              greetText="Register now"
              greetDes="Become the part of thriving community!"
            />
            <View style={{padding: 24}}>
              <AppTextInput placeholder="Username" />
              <AppTextInput placeholder="Email" />
              <AppTextInput placeholder="Password" />
              <AppTextInput placeholder="Confirm Password" />
              <AppButton title="Register" />
            </View>
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  footerText: {
    marginRight: 5,
    fontFamily: 'Poppins-Light',
    fontSize: 15,
    color: colors.secondary,
  },
  loginText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: colors.secondary,
  },
});

export default RegisterScreen;
