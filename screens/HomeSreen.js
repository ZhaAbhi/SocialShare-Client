import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Alert, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import LoadingImage from '../assets/images/loadingImage.jpeg';

const HomeScreen = ({route}) => {
  const [user, setUser] = useState();
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
  console.log(user);
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to Home page</Text>
      {user && <Text>{user.name}</Text>}
      {user && user.profileImage === undefined ? (
        <Image source={LoadingImage} style={{height: 50, width: 50}} />
      ) : (
        <Text>There is profile image</Text>
      )}
    </SafeAreaView>
  );
};
export default HomeScreen;
