import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import Entypo from 'react-native-vector-icons/Entypo';
import AppIcon from './AppIcon';
import moment from 'moment';
import {displayImage} from '../config/api';

const PostContainer = ({item, onPress}) => {
  const {_id, content, createdAt, postedBy, postImage} = item;
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
        style={{width: 50, height: 50, borderRadius: 50}}
      />
      <View style={{marginLeft: 10, flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 3,
          }}>
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
          <Text
            style={{
              marginLeft: 10,
              fontSize: 12.5,
              color: 'grey',
              fontFamily: 'Poppins-Light',
            }}>
            • {postDate}
          </Text>
          <Entypo
            name="dots-three-horizontal"
            size={15}
            color="grey"
            style={{marginLeft: 'auto'}}
          />
        </View>
        {content !== '' && (
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: '#000',
              lineHeight: 20,
            }}>
            {content}
          </Text>
        )}
        {postImage && (
          <Image
            source={{
              uri: `${displayImage}/${postImage}`,
            }}
            style={{
              width: '100%',
              aspectRatio: 16 / 9,
              marginVertical: 10,
              borderRadius: 15,
            }}
          />
        )}

        <View
          style={{
            marginTop: 10,
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
