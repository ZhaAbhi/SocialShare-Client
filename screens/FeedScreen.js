import React, {useContext, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import UserContext from '../context/UserContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {retrievePosts} from '../config/api';

const FeedScreen = () => {
  const {user} = useContext(UserContext);
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
          console.log(res.data);
        });
      } catch (error) {
        return Alert.alert('Could not retrieve posts');
      }
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);
  return (
    <View>
      <Text>This is feed screen</Text>
    </View>
  );
};

export default FeedScreen;
