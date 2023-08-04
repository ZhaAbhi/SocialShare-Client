import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import {colors} from '../utils/colors';
import PostCardFooter from './PostCardFooter';

const PostCard = ({post}) => {
  const {postedBy} = post;
  const nameFromEmail = postedBy.email
    .split('@')[0]
    .split('.')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  const handleLike = () => {
    console.log(post._id);
  };
  return (
    <View
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
        <View style={{marginTop: 15}}>
          <PostCardFooter onLikePress={handleLike} />
        </View>
      </View>
      {/* footer */}
    </View>
  );
};
export default PostCard;
