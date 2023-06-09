import React from 'react';
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
} from 'react-native';
import AppButton from '../components/AppButton';
import {colors} from '../config/colors';
import SocialShareImage from '../assets/images/socialshare.png';
import Githublogo from '../assets/images/Githublogo.png';
import BackIcon from 'react-native-vector-icons/Ionicons';
import AppTextInput from '../components/AppTextInput';

const LoginScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}>
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
            <Image source={SocialShareImage} style={styles.socialShareImage} />
            <View style={styles.loginTitleContainer}>
              <Text style={styles.welcomeBackTitle}>Welcome Back</Text>
              <Text style={styles.signinTitle}>Please sign in to continue</Text>
            </View>
            <View style={styles.textInputContainer}>
              <AppTextInput placeholder="Email" />
              <AppTextInput placeholder="Password" />
              <AppButton title="Login" />
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
  socialShareImage: {
    height: 100,
    width: 200,
    alignSelf: 'center',
  },
  loginTitleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeBackTitle: {
    fontFamily: 'Poppins-Light',
    color: colors.secondary,
    fontSize: 17,
  },
  signinTitle: {
    fontFamily: 'Poppins-Light',
    color: colors.secondary,
    fontSize: 17,
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
