import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import WelcomeImage from '../assets/images/welcome.jpg';
import AppButton from '../components/AppButton';
import {colors} from '../config/colors';

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={WelcomeImage} style={styles.image} />
      <View style={styles.welcomeDes}>
        <Text style={styles.socialShareText}>Welcome to Social Share</Text>
        <Text style={styles.des}>
          Full Fledge Social Media App to Share, Message and Connect with
          friends!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          onPress={() => navigation.navigate('Login')}
          activeOpacity={0.8}
          title="Login"
          containerStyle={{backgroundColor: colors.tertiary}}
        />
        <AppButton
          activeOpacity={0.8}
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    height: '70%',
    width: '100%',
    resizeMode: 'contain',
  },
  welcomeDes: {
    padding: 10,
    bottom: '18%',
  },
  socialShareText: {
    marginBottom: 10,
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    color: colors.primary,
  },
  welcomeText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
  },
  des: {
    fontFamily: 'Poppins-Light',
    color: colors.secondary,
  },
  buttonContainer: {
    bottom: '15%',
    padding: 10,
  },
});

export default WelcomeScreen;
