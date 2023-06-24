import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';

const CommentPost = ({item}) => {
  const {comment, user} = item;
  const {email, username} = user;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
        }}>
        <Image
          source={loadingImage}
          style={{height: 40, width: 40, borderRadius: 20}}
        />
        <View style={{flex: 1, marginLeft: 5}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginRight: 5}}>{email.match(/^(.*)@/)?.[1]}</Text>
            <Text>@{username}</Text>
          </View>
          <Text
            style={{marginTop: 4, fontSize: 15, fontFamily: 'Poppins-Light'}}>
            {comment}
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: 'lightgrey',
        }}></View>
    </>
  );
};

export default CommentPost;
