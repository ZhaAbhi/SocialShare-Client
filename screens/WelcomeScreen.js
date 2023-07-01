import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import WelcomeScreenPng from '../assets/images/welcomeScreen.png';
import BackgroundLayout from '../components/BackgroundLayout';
import AppButton from '../components/AppButton';

const WelcomeScreen = () => {
  return (
    <BackgroundLayout>
      <Image source={WelcomeScreenPng} style={{height: 300, width: '100%'}} />
      <Text style={styles.title}>Social Share</Text>
      <View style={styles.desContainer}>
        <Text style={styles.des}>Discover a world of endless connections</Text>
        <Text style={[styles.des, {textAlign: 'center'}]}>
          Join our social media revolution
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <AppButton name="LOGIN" />
        <AppButton name="REGISTER" />
      </View>
    </BackgroundLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 35,
    textAlign: 'center',
  },
  desContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 5,
  },
  des: {fontSize: 17, fontFamily: 'Poppins-SemiBold', color: '#fff'},
  btnContainer: {
    marginTop: '10%',
    padding: 20,
  },
});
export default WelcomeScreen;
