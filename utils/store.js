import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async token =>
  await AsyncStorage.setItem('AccessToken', token);

export const retrieveToken = async () =>
  await AsyncStorage.getItem('AccessToken');
