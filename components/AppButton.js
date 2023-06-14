import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../config/colors';

const AppButton = ({title, containerStyle, textStyle, buffering, ...props}) => {
  return (
    <TouchableOpacity
      disabled={buffering}
      {...props}
      style={[styles.container, containerStyle]}>
      {buffering ? (
        <ActivityIndicator size="small" color="#fff" style={{fontSize: 14}} />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 17,
    letterSpacing: 2,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
});
export default AppButton;
