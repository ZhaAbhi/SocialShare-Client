import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CameraIcon from 'react-native-vector-icons/Entypo';
import {colors} from '../utils/colors';

const PostContentFooter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} style={styles.imagePicker}>
        <CameraIcon name="camera" size={40} color={colors.eelightgray} />
      </TouchableOpacity>
      <View style={styles.textCount}>
        <Text style={styles.count}>250</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imagePicker: {
    height: 80,
    width: 80,
    backgroundColor: colors.darkgray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textCount: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 50,
  },
  count: {
    color: colors.black,
  },
});
export default PostContentFooter;
