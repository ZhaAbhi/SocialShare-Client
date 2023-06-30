import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import WelcomeScreenPng from '../assets/images/welcomeScreen.png';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-gesture-handler';

const WelcomeScreen = () => {
  return (
    <LinearGradient
      colors={['#b7e4c7', '#52b788', '#40916c']}
      style={{flex: 1}}>
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <Image source={WelcomeScreenPng} style={{height: 300, width: '100%'}} />
        <Text style={{color: '#fff', fontFamily: 'Poppins-Bold', fontSize: 35}}>
          Social Share
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            marginTop: 5,
          }}>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'Poppins-SemiBold',
              color: '#fff',
            }}>
            Discover a world of endless connections
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 17,
              fontFamily: 'Poppins-SemiBold',
              color: '#fff',
            }}>
            Join our social media revolution
          </Text>
        </View>
        <View
          style={{
            marginTop: '15%',
            width: '100%',
            marginVertical: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,

            elevation: 15,
          }}>
          <LinearGradient
            end={{x: 0, y: 0}}
            start={{x: 1, y: 0}}
            colors={['#2d6a4f', '#1b4332']}
            style={{
              backgroundColor: 'red',
              alignItems: 'center',
              height: 35,
              justifyContent: 'center',
              borderRadius: 25,
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 18,
                letterSpacing: 0.2,
              }}>
              LOGIN
            </Text>
          </LinearGradient>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default WelcomeScreen;
