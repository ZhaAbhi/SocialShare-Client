import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const getToken = async () => {
    const accessToken = await AsyncStorage.getItem('token');
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <View>
      <Text>This is home screen</Text>
    </View>
  );
};

export default HomeScreen;
