import React, {useContext, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Alert, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import AppHeader from '../components/AppHeader';
import TopTabNavigator from '../navigation/TopTabNavigator';
import PostButton from '../components/PostButton';
import UserContext from '../context/UserContext';

const HomeScreen = ({navigation, route}) => {
  const {user, setUser} = useContext(UserContext);
  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      await axios({
        url: 'http://192.168.1.71:8000/',
        method: 'get',
        headers: {
          Authorization: token,
        },
      }).then(res => {
        if (res.data) {
          setUser(res.data);
        }
      });
      if (token === null) {
        Alert.alert('Please login again!');
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <SafeAreaView>
        {user && <AppHeader username={user.username} />}
        <View
          style={{
            height: 0.3,
            width: '100%',
            backgroundColor: 'lightgrey',
          }}></View>
      </SafeAreaView>
      <TopTabNavigator />
      <PostButton onPress={() => navigation.navigate('PostContent')} />
    </>
  );
};
export default HomeScreen;
