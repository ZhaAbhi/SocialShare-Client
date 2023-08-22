import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {colors} from '../utils/colors';
import FriendLists from '../components/FriendLists';
import axios from 'axios';
import {retrieve} from '../utils/asyncStore';
import {api} from '../config/api';

const FriendSuggestionScreen = () => {
  const [userSuggestions, setUserSuggestions] = useState([]);

  const fetchAllUser = async () => {
    console.log('call users api');
    const token = await retrieve();
    await axios({
      method: 'get',
      url: `${api.users}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res.data);
        setUserSuggestions(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAllUser();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 20, color: colors.black}}>
          Friends Suggestions
        </Text>
        <View style={{marginTop: 20}}>
          {/* Lists of all users */}
          {userSuggestions && (
            <FlatList
              data={userSuggestions}
              keyExtractor={item => item._id}
              renderItem={({item}) => <FriendLists user={item} />}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FriendSuggestionScreen;
