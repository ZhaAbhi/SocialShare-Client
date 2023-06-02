import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';

const PostDetailScreen = ({route, navigation}) => {
  const item = route.params;
  console.log(item.content);
  return (
    <SafeAreaView>
      <Text>{item.content}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PostDetailScreen;
