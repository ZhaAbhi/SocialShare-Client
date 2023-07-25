import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';

const PostContentHeader = ({onPressClose, OnPressPost}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressClose} hitSlop={10}>
        <Text style={styles.close}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={OnPressPost}
        style={styles.postButton}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.elightgray,
  },
  close: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
  postButton: {
    height: 25,
    backgroundColor: colors.blue,
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    color: colors.white,
    letterSpacing: 0.3,
  },
});
export default PostContentHeader;
