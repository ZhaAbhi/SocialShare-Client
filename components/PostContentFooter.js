import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import CameraIcon from 'react-native-vector-icons/Entypo';
import {colors} from '../utils/colors';

const PostContentFooter = ({
  totalTextCount,
  onPressPicker,
  pickedImage,
  onPressCross,
}) => {
  const getMaxTextCount = totalTextCount === 175;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.imagePicker}
        onPress={onPressPicker}>
        <CameraIcon name="camera" size={40} color={colors.eelightgray} />
      </TouchableOpacity>
      {/* Image upload by user */}
      {pickedImage !== null && (
        <View style={[styles.imagePicker, {marginLeft: 20}]}>
          <Image
            source={{uri: pickedImage.assets[0].uri}}
            style={styles.uploadedImage}
          />
          <TouchableOpacity
            onPress={onPressCross}
            activeOpacity={0.8}
            style={styles.cross}>
            <Text style={styles.crossText}>X</Text>
          </TouchableOpacity>
        </View>
      )}
      <View
        style={[
          styles.textCount,
          {borderColor: getMaxTextCount ? colors.red : colors.blue},
        ]}>
        <Text style={{color: getMaxTextCount ? colors.red : colors.black}}>
          {totalTextCount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
    borderRadius: 50,
    marginLeft: 'auto',
  },
  uploadedImage: {
    height: 80,
    width: 80,
  },
  cross: {
    position: 'absolute',
    top: -7,
    right: -2,
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.black,
  },
  crossText: {
    color: colors.elightgray,
  },
});
export default PostContentFooter;
