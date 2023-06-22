import React from 'react';
import {View, Text, ScrollView} from 'react-native';

const CommentPost = ({item}) => {
  const {comment, user} = item;
  const {email, username} = user;
  return (
    <View>
      <Text>Hello there</Text>
    </View>
  );
};

export default CommentPost;
