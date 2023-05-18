import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  StyleSheet,
} from 'react-native';
import GithubLogo from '../assets/images/Github-logo.png';
import AppTextInput from '../components/AppTextInput';

const LoginScreen = () => {
  const [active, setActive] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView>
        <View style={styles.headlineContainer}>
          <Text style={styles.loginText}>Login here</Text>
          <View style={{marginTop: '5%'}}>
            <Text style={styles.welcomeText}>Welcome back you've</Text>
            <Text style={[styles.welcomeText, {textAlign: 'center'}]}>
              been missed!
            </Text>
          </View>
        </View>
        <View style={{padding: 20, marginTop: 30}}>
          <AppTextInput placeholder="Email" style={{marginBottom: 26}} />
          <AppTextInput placeholder="Password" />
          <Text style={styles.forgotPasswordText}>Forget your password?</Text>
          <View style={styles.signInButtonContainer}>
            <Text style={styles.signinText}>Sign in</Text>
          </View>
          <View style={styles.createAccount}>
            <Text style={styles.createAccountText}>Create a new account</Text>
            <View style={styles.createAccountContainer}>
              <Text style={styles.continueText}>or continue with</Text>
              <View style={styles.githubLoginContainer}>
                <Image source={GithubLogo} style={styles.githublogo} />
                <Text style={styles.githubText}>GitHub</Text>
              </View>
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
  forgotPasswordText: {
    marginLeft: 'auto',
    marginTop: 35,
    fontFamily: 'Poppins-SemiBold',
    color: 'darkblue',
  },
  signInButtonContainer: {
    shadowColor: 'darkblue',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
    backgroundColor: 'darkblue',
    padding: 13,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  signinText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
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
  createAccountText: {
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
export default LoginScreen;
