import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, ScrollView, Alert} from 'react-native';
import FeedContainer from './FeedContainer';
import axios from 'axios';

const Feed = () => {
  const [userPosts, setUserPosts] = useState();
  const [refreshing, setRefreshing] = useState(true);

  const fetchAllUserPosts = async () => {
    setRefreshing(true);
    try {
      await axios({
        url: 'http://192.168.1.71:8000/post/retrieve',
        method: 'get',
      })
        .then(res => {
          if (res.data) {
            setUserPosts(res.data);
            setRefreshing(false);
          }
        })
        .catch(error => {
          Alert.alert('Could not fetched the content!');
          setRefreshing(false);
        });
    } catch (error) {
      Alert.alert('Could not fetched the content!');
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchAllUserPosts();
  }, []);

  return (
    <View>
      {userPosts && (
        <FlatList
          data={userPosts}
          keyExtractor={item => item._id}
          renderItem={({item}) => <FeedContainer item={item} />}
          showsVerticalScrollIndicator={false}
          onRefresh={fetchAllUserPosts}
          refreshing={refreshing}
        />
      )}
    </View>
  );
};

export default Feed;
