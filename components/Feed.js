import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, ScrollView, Alert} from 'react-native';
import FeedContainer from './FeedContainer';
import axios from 'axios';
import serverUrl from '../config/serverAccess';

const Feed = ({navigation}) => {
  const [userPosts, setUserPosts] = useState();
  const [refreshing, setRefreshing] = useState(true);

  const fetchAllUserPosts = async () => {
    try {
      await axios({
        url: `${serverUrl}/post/retrieve`,
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
    const unsubscribe = navigation.addListener('focus', () => {
      fetchAllUserPosts();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      {userPosts && (
        <FlatList
          data={userPosts}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <FeedContainer
              item={item}
              onPress={() =>
                navigation.navigate('PostDetail', {postId: item._id})
              }
            />
          )}
          showsVerticalScrollIndicator={false}
          onRefresh={fetchAllUserPosts}
          refreshing={refreshing}
        />
      )}
    </View>
  );
};

export default Feed;
