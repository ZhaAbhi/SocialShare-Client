import React, {useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {home} from '../config/api';
import axios from 'axios';

const HomeScreen = () => {
  const fetchUserInfo = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (!accessToken) {
      return Alert.alert('Something went wrong!Try logging again!');
    }
    try {
      await axios({
        url: home,
        method: 'get',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(res => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);
  return (
    <View>
      <Text>This is home screen</Text>
    </View>
  );
};

export default HomeScreen;
