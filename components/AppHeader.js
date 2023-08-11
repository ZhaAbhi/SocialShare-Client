import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import ModeIcon from 'react-native-vector-icons/Entypo';
import {colors} from '../utils/colors';

const AppHeader = ({onPressAvatar}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressAvatar} activeOpacity={0.8}>
        <Image source={loadingImage} style={styles.avatar} />
      </TouchableOpacity>
      <Text style={styles.logo}>Social Share</Text>
      <TouchableOpacity>
        <ModeIcon name="light-up" size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.lightgray,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  logo: {
    fontSize: 17,
    color: colors.blue,
    fontFamily: 'Poppins-Medium',
  },
});

export default AppHeader;
