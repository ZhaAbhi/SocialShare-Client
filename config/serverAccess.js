import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseUrl = 'http://192.168.1.71:8000';

const token = AsyncStorage.getItem('token');

const serverAccess = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: token,
  },
});

export default serverAccess;
