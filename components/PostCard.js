import React, {useContext, useState} from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import {colors} from '../utils/colors';
import PostCardIcon from './PostCardIcon';
import {retrieveToken} from '../utils/store';
import axios from 'axios';
import UserContext from '../context/UserContext';
import {api} from '../config/api';

const PostCard = ({post, onPress}) => {
  const {user} = useContext(UserContext);
  const defaultPostLike = user.likes.includes(post._id);
  const {postedBy} = post;
  const [liked, setIsLiked] = useState(defaultPostLike);
  const nameFromEmail = postedBy.email
    .split('@')[0]
    .split('.')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  const handleLike = async () => {
    const token = await retrieveToken();
    await axios({
      method: 'put',
      url: `${api.postLike}/${post._id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (res.data.likes.includes(user._id)) {
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

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
          <PostCardIcon
            iconName="heart"
            onPress={handleLike}
            color={liked ? 'red' : colors.darkgray}
          />
          <PostCardIcon iconName="retweet" color={colors.darkgray} />
          <PostCardIcon iconName="comment" color={colors.darkgray} />
          <PostCardIcon iconName="share-google" color={colors.darkgray} />
        </View>
      </View>
    </Pressable>
  );
};
export default PostCard;
