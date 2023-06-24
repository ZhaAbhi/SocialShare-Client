import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';

const CommentPost = ({item}) => {
  const {comment, user} = item;
  const {email, username} = user;
  return (
    <View>
      <Text>This is comment box to display comment</Text>
    </View>
  );
};

export default CommentPost;
