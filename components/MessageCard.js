import React from 'react';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import {colors} from '../utils/colors';

const MessageCard = ({item, onPress}) => {
  console.log(item);
  const firstNameFromEmail = item.email.match(/^([^@]+)/)[1];
  return (
    <Pressable
      onPress={onPress}
      style={{
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.darkgray,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={loadingImage}
          style={{height: 40, width: 40, borderRadius: 25}}
        />
        <View style={{marginLeft: 5, flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', color: colors.black}}>
              {firstNameFromEmail}
            </Text>
            <Text style={{marginLeft: 5, color: colors.darkgray}}>
              @{item.username}
            </Text>
            <Text style={{marginLeft:"auto", fontSize:12, color:colors.darkgray}}>Aug 23</Text>
          </View>
          <Text numberOfLines={1} style={{color: colors.black}}>
            This is my message and it can be very very long for example
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MessageCard;
