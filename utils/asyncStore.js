import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const store = async data => {
  try {
    await AsyncStorage.setItem('AccessToken', data);
  } catch (error) {
    return Alert.alert('Something went wrong, Please try again!');
  }
};

export const retrieve = async () => {
  try {
    const value = await AsyncStorage.getItem('AccessToken');
    if (value !== null) {
      return value;
    }
  } catch (error) {
    return Alert.alert('Something went wrong, Please try again!');
  }
};
