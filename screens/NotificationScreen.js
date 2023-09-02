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
          fontWeight: 'bold',
          fontFamily: 'poppins-medium',
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
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{color: colors.black, fontSize: 16}}>
            John likes your post
          </Text>
          <Text style={{marginLeft: 'auto', color: colors.darkgray}}>
            Aug 26
          </Text>
        </View>
        <View
          style={{
            backgroundColor: colors.elightgray,
            padding: 10,
            marginVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{color: colors.black, fontSize: 16}}>
            John follows your post
          </Text>
          <Text style={{marginLeft: 'auto', color: colors.darkgray}}>
            Aug 28
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
