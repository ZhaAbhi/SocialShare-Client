import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import {colors} from '../utils/colors';

const PostCommentCard = ({comment}) => {
  const {commentsBy} = comment;
  const extractNameFromEmail = commentsBy.email
    .split('@')[0]
    .split('.')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.darkgray,
        marginVertical: 10,
      }}>
      <Image
        source={loadingImage}
        style={{height: 25, width: 25, borderRadius: 15}}
      />
      <View style={{flex: 1, marginLeft: 5}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{extractNameFromEmail}</Text>
          <Text style={{marginLeft: 5}}>@{commentsBy.username}</Text>
        </View>
        <View style={{marginTop: 5, marginBottom: 10}}>
          <Text>{comment.commentContent}</Text>
        </View>
      </View>
    </View>
  );
};
export default PostCommentCard;
