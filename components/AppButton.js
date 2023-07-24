import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

const AppButton = ({style, title}) => {
  return (
    <TouchableOpacity style={[style, styles.button]} activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.black,
    height: 35,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.eelightgray,
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
  },
});
export default AppButton;
