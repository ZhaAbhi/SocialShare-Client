import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import SocialShareImage from '../assets/images/socialshare.png';
import {colors} from '../config/colors';

const UnAuthenticatedHeader = ({greetText, greetDes}) => {
  return (
    <View>
      <Image source={SocialShareImage} style={styles.socialShareImage} />
      <View style={styles.loginTitleContainer}>
        <Text style={styles.greetText}>{greetText}</Text>
        <Text style={styles.greetDes}>{greetDes}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  socialShareImage: {
    height: 100,
    width: 200,
    alignSelf: 'center',
  },
  loginTitleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  greetText: {
    fontFamily: 'Poppins-Light',
    color: colors.secondary,
    fontSize: 17,
  },
  greetDes: {
    fontFamily: 'Poppins-Light',
    color: colors.secondary,
    fontSize: 17,
  },
});
export default UnAuthenticatedHeader;
