import React from 'react';
import {SafeAreaView, View} from 'react-native';
import UnAuthHeader from '../components/UnAuthHeader';
import AppTextInput from '../components/AppTextInput';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <UnAuthHeader
        greetOne="Please provide your login credentials"
        greetTwo="to continue with social share"
      />
      <View>
        <AppTextInput placeholder="Email" />
        <AppTextInput placeholder="Password" />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
