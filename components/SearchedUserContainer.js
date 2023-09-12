import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import UserContext from '../context/UserContext';
import {retrieve} from '../utils/asyncStore';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {api} from '../config/api';
import loadingImage from '../assets/images/loadingImage.jpeg';
import { colors } from '../utils/colors';

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
        navigate('MessageBox', {allChat: res.data});
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <View style={{borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor:colors.darkgray, padding:10}}>
      <TouchableOpacity onPress={accessChat}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={loadingImage}
            style={{height: 50, width: 50, borderRadius: 25}}
          />
          <View style={{marginLeft: 5}}>
            <Text style={{color:colors.black}}>{item.email.match(/^([^@]+)/)[1]}</Text>
            <Text style={{color:colors.darkgray}}>@{item.username}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchedUserContainer;
