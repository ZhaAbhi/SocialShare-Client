import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../config/colors';

const FloatingButton = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.container}>
      <Text style={{fontSize: 30, color: '#fff'}}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 35,
    opacity: 0.7,
    backgroundColor: colors.primary,
    position: 'absolute',
    right: 15,
    bottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default FloatingButton;
