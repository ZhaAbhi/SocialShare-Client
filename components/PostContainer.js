import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import Entypo from 'react-native-vector-icons/Entypo';
import AppIcon from './AppIcon';
import moment from 'moment';

const PostContainer = ({item, onPress}) => {
  const {_id, content, createdAt, postedBy} = item;
  const firstName = postedBy.email.match(/^(.*)@/)?.[1];
  const postDate = moment(createdAt).fromNow(true);
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
      }}>
      <Image
        source={loadingImage}
        style={{height: 50, width: 50, borderRadius: 25}}
      />
      <View style={{flex: 1, marginLeft: 5}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 3}}>
          <Text style={{fontFamily: 'Poppins-semiBold', color: '#000'}}>
            {firstName}
          </Text>
          <Text
            style={{
              marginLeft: 3,
              fontFamily: 'Poppins-Light',
              color: 'grey',
              fontSize: 12.5,
            }}>
            @{postedBy.username}
          </Text>
          <Text style={{marginLeft: 10, fontSize: 12, color: 'grey'}}>
            • {postDate}
          </Text>
          <Entypo
            name="dots-three-horizontal"
            size={15}
            color="grey"
            style={{marginLeft: 'auto'}}
          />
        </View>
        <Text style={{fontFamily: 'Poppins-Regular', color: '#000'}}>
          {content}This si smuy test to test the cobntest ius bsicubke siudyide
          the container or noit
        </Text>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <AppIcon iconName="heart" />
          <AppIcon iconName="retweet" />
          <AppIcon iconName="comment" />
          <AppIcon iconName="share-google" />
        </View>
      </View>
    </Pressable>
  );
};

export default PostContainer;
