import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {retrieve} from '../utils/asyncStore';
import axios from 'axios';
import {api} from '../config/api';

const MyPostsScreen = ({userId}) => {
  console.log('In post screen', userId);
  const fetchUserPost = async () => {
    const token = await retrieve();
    await axios({
      method: 'get',
      url: `${api.getUserPost}/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   fetchUserPost();
  // }, []);
  return (
    <ScrollView style={{flex: 1}}>
      <Text style={{marginBottom: 80}}>This is my post</Text>
      <Text style={{marginBottom: 80}}>This is my post</Text>
      <Text style={{marginBottom: 80}}>This is my post</Text>
      <Text style={{marginBottom: 80}}>This is my post</Text>
    </ScrollView>
  );
};

export default MyPostsScreen;
