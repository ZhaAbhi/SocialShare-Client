import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import {colors} from '../utils/colors';
import UserContext from '../context/UserContext';
import axios from 'axios';
import {retrieve} from '../utils/asyncStore';
import {api} from '../config/api';

const FriendLists = ({item}) => {
  const {user} = useContext(UserContext);
  const firstnameFromEmail = item.email.match(/^([^@]+)/)[1];
  const [following, setIsFollowing] = useState(
    user.followings.includes(item._id),
  );

  const handleFollowing = async () => {
    const token = await retrieve();
    await axios({
      method: 'put',
      url: `${api.follow}/${item._id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setIsFollowing(!following);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={{marginBottom: 10}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={loadingImage}
          style={{height: 40, width: 40, borderRadius: 20}}
        />
        <View style={{marginLeft: 5}}>
          <Text style={{fontSize: 16, color: colors.black}}>
            {firstnameFromEmail}
          </Text>
          <Text style={{fontSize: 14, color: colors.darkgray}}>
            @{item.username}
          </Text>
          {item.bio && (
            <Text style={{fontSize: 16, color: colors.black, marginTop: 5}}>
              This is user description.
            </Text>
          )}
        </View>
        <View style={{marginLeft: 'auto'}}>
          <TouchableOpacity
            onPress={handleFollowing}
            style={{
              backgroundColor: colors.blue,
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 3,
              paddingBottom: 3,
              borderRadius: 20,
            }}>
            <Text style={{color: colors.eelightgray, fontWeight: 'bold'}}>
              {following ? 'Following' : 'Follow'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: colors.lightgray,
          marginTop: 5,
        }}></View>
    </View>
  );
};
export default FriendLists;
