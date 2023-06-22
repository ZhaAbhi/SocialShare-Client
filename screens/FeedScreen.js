import React, {useEffect, useState} from 'react';
import {View, Text, Alert, FlatList} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {retrievePosts} from '../config/api';
import PostContainer from '../components/PostContainer';
import FloatingButton from '../components/FloatingButton';

const FeedScreen = ({navigation}) => {
  const [posts, setPosts] = useState();
  const fetchAllPosts = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (accessToken) {
      try {
        await axios({
          url: retrievePosts,
          method: 'get',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }).then(res => {
          if (res.status === 200) {
            setPosts(res.data.posts);
          }
        });
      } catch (error) {
        return Alert.alert('Could not retrieve posts');
      }
    }
  };

  useEffect(() => {
    fetchAllPosts();
    const unsubscribe = navigation.addListener('focus', () => {
      fetchAllPosts();
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      {posts ? (
        <FlatList
          data={posts}
          keyExtractor={posts => posts._id}
          renderItem={({item}) => (
            <PostContainer
              item={item}
              onPress={() =>
                navigation.navigate('FeedDetailScreen', {postId: item._id})
              }
            />
          )}
        />
      ) : (
        <Text>Nothing to show</Text>
      )}
      <FloatingButton
        onPress={() => navigation.navigate('PostContentScreen')}
      />
    </View>
  );
};

export default FeedScreen;
