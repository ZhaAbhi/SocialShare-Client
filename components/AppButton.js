import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AppButton = ({name, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.buttonContainer, style]}>
      <LinearGradient
        end={{x: 0, y: 0}}
        start={{x: 1, y: 0}}
        colors={['#2d6a4f', '#1b4332']}
        style={styles.buttonBackground}>
        <Text style={styles.name}>{name}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  buttonBackground: {
    backgroundColor: 'red',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    borderRadius: 25,
  },
  name: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    letterSpacing: 0.2,
  },
});

export default AppButton;
