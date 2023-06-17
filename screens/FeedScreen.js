import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Alert, FlatList, TouchableOpacity} from 'react-native';
import UserContext from '../context/UserContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {retrievePosts} from '../config/api';
import PostContainer from '../components/PostContainer';
import { colors } from '../config/colors';

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
      <TouchableOpacity
        onPress={() => navigation.navigate('PostContentScreen')}
        activeOpacity={0.8}
        style={{
          height: 50,
          width: 50,
          borderRadius: 35,
          backgroundColor: colors.primary,
          position: 'absolute',
          right: 15,
          bottom: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, color: '#fff'}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedScreen;
