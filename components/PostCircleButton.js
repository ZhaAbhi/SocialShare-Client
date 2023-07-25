import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

const PostCircleButton = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    position: 'absolute',
    right: 15,
    bottom: 8,
    borderRadius: 25,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
    color: colors.white,
  },
});
export default PostCircleButton;
