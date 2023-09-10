import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, TextInput, FlatList} from 'react-native';
import {colors} from '../utils/colors';
import {retrieve} from '../utils/asyncStore';
import axios from 'axios';
import {api} from '../config/api';
import MessageCard from '../components/MessageCard';

const MessageScreen = ({navigation}) => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const token = await retrieve();
    await axios({
      method: 'get',
      url: `${api.fetchChats}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setChats(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchChats();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 10}}>
        <TextInput
          onPressIn={() => navigation.navigate('SearchUserScreen')}
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
      <View style={{borderWidth: 0.5, borderColor: colors.lightgray}}></View>
      <View style={{padding: 10}}>
        <Text
          style={{
            fontSize: 18,
            color: colors.black,
            fontWeight: 'bold',
            fontFamily: 'Poppins-Medium',
          }}>
          Recent messages
        </Text>
      </View>
      <View style={{flex: 1}}>
        {chats && (
          <FlatList
            data={chats}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
              <MessageCard
                item={item}
                onPress={() =>
                  navigation.navigate('MessageBox', {allChat: item})
                }
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;
