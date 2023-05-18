import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const AppButton = ({title, containerStyle, titleStyle}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, containerStyle]}>
      <Text style={[styles.buttonText, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    shadowColor: 'darkblue',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
    backgroundColor: 'darkblue',
    padding: 13,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
});
export default AppButton;
