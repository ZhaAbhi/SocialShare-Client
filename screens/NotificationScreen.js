import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {colors} from '../utils/colors';

const NotificationScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Text
        style={{
          padding: 10,
          fontSize: 20,
          letterSpacing: 1,
          color: colors.black,
        }}>
        Notifications
      </Text>
      <View
        style={{
          padding: 10,
        }}>
        <View
          style={{
            backgroundColor: colors.elightgray,
            padding: 10,
            marginVertical: 10,
          }}>
          <Text style={{color: colors.black}}>John likes your post</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.elightgray,
            padding: 10,
            marginVertical: 10,
          }}>
          <Text style={{color: colors.black}}>John follows your post</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
