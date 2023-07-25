import React, {useEffect, useLayoutEffect} from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import PostContentHeader from '../components/PostContentHeader';

const PostContentScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <PostContentHeader onPressClose={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default PostContentScreen;
