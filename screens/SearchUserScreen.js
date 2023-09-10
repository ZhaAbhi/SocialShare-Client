import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, View, Text, TextInput} from 'react-native';
import {colors} from '../utils/colors';
import {retrieve} from '../utils/asyncStore';
import axios from 'axios';
import {api} from '../config/api';
import MessageCard from '../components/MessageCard';
import SearchedUserContainer from '../components/SearchedUserContainer';

const SearchUserScreen = ({navigation}) => {
  const [searchedUser, setSearchedUser] = useState();
  const [searchKeyword, setSearchkeyword] = useState('');

  const searchForUser = async () => {
    const token = await retrieve();
    await axios({
      method: 'get',
      url: `${api.getUser}?search=${searchKeyword}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setSearchedUser(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    searchForUser();
  }, [searchKeyword]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 10}}>
        <TextInput
          onChangeText={text => setSearchkeyword(text)}
          placeholder="Search Direct Messages"
          placeholderTextColor={colors.darkgray}
          style={{
            padding: 10,
            borderRadius: 25,
            paddingLeft: 10,
            backgroundColor: colors.elightgray,
          }}
        />
      </View>
      <View style={{flex: 1}}>
        {searchedUser && (
          <FlatList
            data={searchedUser}
            keyExtractor={item => item._id}
            renderItem={({item}) => <SearchedUserContainer item={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchUserScreen;
