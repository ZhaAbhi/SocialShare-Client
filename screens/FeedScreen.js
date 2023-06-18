import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Alert, FlatList, TouchableOpacity} from 'react-native';
import UserContext from '../context/UserContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {retrievePosts} from '../config/api';
import PostContainer from '../components/PostContainer';
import {colors} from '../config/colors';
import FloatingButton from '../components/FloatingButton';

const FeedScreen = ({navigation}) => {
  const {user} = useContext(UserContext);
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
              onPress={() => navigation.navigate('FeedDetailScreen')}
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
