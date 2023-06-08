import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Button,
} from 'react-native';
import AppButton from '../components/AppButton';
import {colors} from '../config/colors';
import SocialShareImage from '../assets/images/socialshare.png';
import Githublogo from '../assets/images/Githublogo.png';

const LoginScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginTop: 25}}>
            <Image
              source={SocialShareImage}
              style={{height: 100, width: 200, alignSelf: 'center'}}
            />
            <View style={{alignItems: 'center', marginBottom: 20}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  color: colors.secondary,
                  fontSize: 17,
                }}>
                Welcome Back
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  color: colors.secondary,
                  fontSize: 17,
                }}>
                Please sign in to continue
              </Text>
            </View>
            <View style={{padding: 20}}>
              <TextInput
                placeholder="Email"
                style={{
                  height: 40,
                  borderWidth: 1,
                  borderColor: '#000',
                  marginBottom: 20,
                  padding: 10,
                  borderRadius: 25,
                }}
              />
              <TextInput
                placeholder="Password"
                style={{
                  height: 40,
                  borderWidth: 1,
                  borderColor: '#000',
                  marginBottom: 20,
                  padding: 10,
                  borderRadius: 25,
                }}
              />
              <AppButton title="Login" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 15,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginRight: 5,
                  fontFamily: 'Poppins-Light',
                  fontSize: 15,
                  color: colors.secondary,
                }}>
                Don't have an account?
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'Poppins-Bold',
                    fontSize: 15,
                    color: colors.secondary,
                  }}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{textAlign: 'center'}}>-------or-------</Text>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  marginRight: 5,
                  fontFamily: 'Poppins-Bold',
                  fontSize: 15,
                  color: colors.secondary,
                }}>
                Continue with
              </Text>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#000',
                    padding: 3,
                  }}>
                  <Image source={Githublogo} style={{height: 30, width: 30}} />
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

export default LoginScreen;
