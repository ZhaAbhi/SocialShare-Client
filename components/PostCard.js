import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import {colors} from '../utils/colors';
import PostCardIcon from './PostCardIcon';

const PostCard = ({post, onPress}) => {
  const {postedBy} = post;
  const nameFromEmail = postedBy.email
    .split('@')[0]
    .split('.')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: 'row',
        marginVertical: 5,
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.lightgray,
      }}>
      <Image
        source={loadingImage}
        style={{height: 50, width: 50, borderRadius: 25}}
      />
      <View style={{flex: 1, marginLeft: 5}}>
        <View style={{flexDirection: 'row', marginBottom: 5}}>
          <Text style={{color: colors.black}}>{nameFromEmail}</Text>
          <Text style={{marginLeft: 5, color: colors.darkgray}}>
            @{postedBy.username}
          </Text>
        </View>
        <Text style={{color: colors.black}}>{post.content}</Text>
        {post.contentImage && (
          <Image
            source={post.contentImage}
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
            marginTop: 15,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <PostCardIcon iconName="heart" />
          <PostCardIcon iconName="retweet" />
          <PostCardIcon iconName="comment" />
          <PostCardIcon iconName="share-google" />
        </View>
      </View>
    </Pressable>
  );
};
export default PostCard;
