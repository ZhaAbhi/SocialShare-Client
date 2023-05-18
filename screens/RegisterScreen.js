import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  StyleSheet,
  Keyboard,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import GithubLogo from '../assets/images/Github-logo.png';

const RegisterScreen = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView>
        <View style={styles.headlineContainer}>
          <Text style={styles.loginText}>Create Account</Text>
          <View style={{marginTop: '5%'}}>
            <Text style={[styles.welcomeText, {textAlign: 'center'}]}>
              Create account so you can
            </Text>
            <Text style={[styles.welcomeText]}>
              explore, share and chat with friends!
            </Text>
          </View>
        </View>
        <View style={{padding: 20, marginTop: 30}}>
          <AppTextInput placeholder="Email" style={{marginBottom: 26}} />
          <AppTextInput placeholder="Password" style={{marginBottom: 26}} />
          <AppTextInput placeholder="Confirm Password" />
          <AppButton title="Register" containerStyle={{marginTop: 28}} />
          <View style={styles.createAccount}>
            <Text
              style={styles.alreadyAccountText}
              onPress={() => navigation.navigate('Login')}>
              Already have an account?
            </Text>
            <View style={styles.createAccountContainer}>
              <Text style={styles.continueText}>or continue with</Text>
              <TouchableOpacity style={styles.githubLoginContainer}>
                <Image source={GithubLogo} style={styles.githublogo} />
                <Text style={styles.githubText}>GitHub</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  headlineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  loginText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'darkblue',
    fontSize: 28,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 17,
  },
  textInput: {
    height: 40,
    backgroundColor: '#f1f4ff',
    borderRadius: 8,
    paddingLeft: 10,
  },
  createAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  continueText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'darkblue',
  },
  createAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  alreadyAccountText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  githubLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    marginLeft: 10,
    borderRadius: 5,
  },
  githublogo: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
  githubText: {
    color: '#000',
    fontWeight: 'bold',
    marginRight: 4,
  },
});
export default RegisterScreen;
