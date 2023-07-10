import React from 'react';
import {SafeAreaView} from 'react-native';
import UnAuthHeader from '../components/UnAuthHeader';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <UnAuthHeader
        greetOne="Please provide your login credentials"
        greetTwo="to continue with social share"
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
