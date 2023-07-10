import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import BackIcon from 'react-native-vector-icons/Ionicons';
import SocialShare from '../assets/images/socialshare.png';

const UnAuthHeader = ({greetOne, greetTwo}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <BackIcon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>
      <Image source={SocialShare} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{greetOne}</Text>
        <Text style={styles.text}>{greetTwo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  backButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#1b4332',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    top: '-20%',
  },
  textContainer: {
    alignItems: 'center',
    top: '-30%',
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    color: '#2d6a4f',
  },
});

export default UnAuthHeader;
