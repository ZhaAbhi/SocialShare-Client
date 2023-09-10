import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import UserContext from '../context/UserContext';
import {retrieve} from '../utils/asyncStore';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {api} from '../config/api';

const SearchedUserContainer = ({item}) => {
  const {navigate} = useNavigation();
  const {user} = useContext(UserContext);
  const [chatCreated, setChatCreated] = useState();

  const accessChat = async () => {
    const token = await retrieve();

    await axios({
      method: 'get',
      url: `${api.accessChats}/${item._id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data);
        navigate('MessageBox', {allChat: res.data});
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <View>
      <TouchableOpacity onPress={accessChat}>
        <Text>{item.email}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchedUserContainer;
