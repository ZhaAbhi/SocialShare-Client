import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {colors} from '../utils/colors';

const AppButton = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 40,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonTitle: {
    color: colors.eelightgray,
    letterSpacing: 1.3,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppButton;
