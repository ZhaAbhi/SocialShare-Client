import React, {useContext, useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import {colors} from '../utils/colors';
import moment from 'moment';
import UserContext from '../context/UserContext';

const MessageCard = ({item, onPress}) => {
  const {user} = useContext(UserContext);
  const [messagedUser, setMessagedUser] = useState();
  const firstNameFromEmail =
    item?.latestMessage?.sender?.email.match(/^([^@]+)/)[1];

  const getMessagedUser = () => {
    item &&
      item.users.find(foundUser => {
        if (foundUser._id !== user._id) {
          setMessagedUser(foundUser);
        }
      });
  };

  useEffect(() => {
    getMessagedUser();
  }, []);

  return (
    messagedUser && (
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
                {messagedUser.email.match(/^([^@]+)/)[1]}
              </Text>
              <Text style={{marginLeft: 5, color: colors.darkgray}}>
                @{messagedUser.username}
              </Text>
              <Text
                style={{
                  marginLeft: 'auto',
                  fontSize: 12,
                  color: colors.darkgray,
                }}>
                {moment(item.latestMessage.createdAt).fromNow()}
              </Text>
            </View>
            <Text numberOfLines={1} style={{color: colors.black}}>
              {item.latestMessage.content}
            </Text>
          </View>
        </View>
      </Pressable>
    )
  );
};

export default MessageCard;
