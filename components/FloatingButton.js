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
    backgroundColor: colors.primary,
    position: 'absolute',
    right: 15,
    bottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FloatingButton;
