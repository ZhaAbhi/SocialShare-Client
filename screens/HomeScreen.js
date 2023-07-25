import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Avatar from '../assets/images/loadingImage.jpeg';
import {colors} from '../utils/colors';
import SwitchMode from 'react-native-vector-icons/Entypo';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8}>
          <Image source={Avatar} style={styles.avatar} />
        </TouchableOpacity>
        <Text style={styles.title}>Social Share</Text>
        <TouchableOpacity>
          <SwitchMode name="light-up" color={colors.black} size={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.elightgray,
    justifyContent: 'space-between',
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
    color: colors.blue,
  },
});

export default HomeScreen;