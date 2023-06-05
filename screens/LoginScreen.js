import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import GithubLogo from '../assets/images/Github-logo.png';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AuthContext from '../context/AuthContext';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import serverUrl from '../config/serverAccess';

const LoginScreen = ({navigation, route}) => {
  const {setLoggedIn} = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const storeToken = async value => {
    try {
      await AsyncStorage.setItem('token', value);
    } catch (e) {
      // saving error
      console('error saving the data');
    }
  };

  const handleLogin = async () => {
    try {
      const userData = {email, password};
      if (userData) {
        await axios({
          url: `${serverUrl}/login`,
          method: 'post',
          data: userData,
        }).then(res => {
          if (res.data) {
            const token = res.data;
            storeToken(token);
            setLoggedIn(true);
          }
        });
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleGithubLogin = async () => {
    const url = `${serverUrl}/auth/github`;
    if (await InAppBrowser.isAvailable()) {
      try {
        if (await InAppBrowser.isAvailable()) {
          InAppBrowser.openAuth(url, 'socialshare://', {
            // iOS Properties
            ephemeralWebSession: false,
            // Android Properties
            showTitle: false,
            enableUrlBarHiding: true,
            enableDefaultShare: false,
          }).then(response => {
            console.log(response);
            if (response.type === 'success' && response.url) {
              const parts = response.url.split('/login/');
              const token = parts[1];
              storeToken(token);
              setLoggedIn(true);
            }
          });
        } else Linking.openURL(url);
      } catch (error) {
        Linking.openURL(url);
      }
    }
  };

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
          <AppTextInput
            placeholder="Email"
            style={{marginBottom: 26}}
            onChangeText={email => setEmail(email)}
          />
          <AppTextInput
            placeholder="Password"
            onChangeText={password => setPassword(password)}
          />
          <Text style={styles.forgotPasswordText}>Forget your password?</Text>
          <AppButton
            title="Sign in"
            containerStyle={{marginTop: 28}}
            onPress={handleLogin}
          />
          <View style={styles.createAccount}>
            <Text
              style={styles.createAccountText}
              onPress={() => navigation.navigate('Register')}>
              Create a new account
            </Text>
            <View style={styles.createAccountContainer}>
              <Text style={styles.continueText}>or continue with</Text>
              <TouchableOpacity
                style={styles.githubLoginContainer}
                onPress={handleGithubLogin}>
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
  forgotPasswordText: {
    marginLeft: 'auto',
    marginTop: 35,
    fontFamily: 'Poppins-SemiBold',
    color: 'darkblue',
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
