import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors} from '../utils/colors';

const PostButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 15,
    bottom: 8,
    height: 50,
    width: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
    opacity: 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  plus: {
    color: colors.eelightgray,
    fontSize: 40,
  },
});
export default PostButton;
