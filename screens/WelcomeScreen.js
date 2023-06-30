import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import WelcomeScreenPng from '../assets/images/welcomeScreen.png';
import LinearGradient from 'react-native-linear-gradient';

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
        <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
          <Text style={{fontSize: 17, fontFamily:'Poppins-SemiBold', color:'#fff'}}>
          Join our social media revolution.
          </Text>
          <Text style={{textAlign:'center',fontSize: 17, fontFamily:'Poppins-SemiBold', color:'#fff'}}>Discover a world of endless connections</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default WelcomeScreen;
