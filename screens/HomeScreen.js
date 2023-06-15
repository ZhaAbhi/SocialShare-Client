import React, {useContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {home} from '../config/api';
import axios from 'axios';
import TopTabNavigator from '../navigation/TopTabNavigator';
import UserContext from '../context/UserContext';

const HomeScreen = ({navigation}) => {
  const {setUser} = useContext(UserContext);
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
        if (res.status === 200) {
          setUser(res.data.user);
        }
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);
  return <TopTabNavigator />;
};

export default HomeScreen;
