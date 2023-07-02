import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import AppButton from '../components/AppButton';
import SocialShare from '../assets/images/socialshare.png';
import BackIcon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          borderRadius: 60,
          backgroundColor: '#2d6a4f',
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 10,
          marginTop: 10,
        }}>
        <BackIcon name="arrow-back" size={25} color="#fff" />
      </View>
      <Image
        source={SocialShare}
        style={{height: 200, width: 200, alignSelf: 'center', top: '-10%'}}
      />
      <View style={{top: '-10%'}}>
        <View style={{alignItems: 'center', top: '-10%'}}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 16,
              color: '#2a9134',
            }}>
            Please provide your login credentials
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 16,
              color: '#2a9134',
              textAlign: 'center',
            }}>
            to continue with Social share
          </Text>
        </View>
        <View style={{padding: 10}}>
          <View style={{marginBottom: 20}}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="darkgrey"
              style={{
                height: 35,
                borderWidth: 1,
                marginBottom: 15,
                borderRadius: 25,
                paddingLeft: 15,
                color: '#000',
              }}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="darkgrey"
              style={{
                height: 35,
                borderWidth: 1,
                borderRadius: 25,
                paddingLeft: 15,
                color: '#000',
              }}
            />
          </View>
          <AppButton name="LOGIN" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Poppins-SemiBold',
                marginRight: 5,
                color: '#000',
              }}>
              Don't have an account?
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Poppins-SemiBold',
                color: '#2a9134',
              }}>
              Create Account
            </Text>
          </View>
          <Text style={{textAlign: 'center', marginTop: 10, color: '#000'}}>
            --------------------or--------------------
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: '#000',
              }}>
              Continue with
            </Text>
            <TouchableOpacity
              style={{
                marginLeft: 5,
                height: 35,
                width: 70,
                borderWidth: 1,
                borderColor: '#000',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#000', fontWeight: 'bold'}}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
