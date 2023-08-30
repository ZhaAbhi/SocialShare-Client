import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {retrieve} from '../utils/asyncStore';
import axios from 'axios';
import {api} from '../config/api';
import PostCard from '../components/PostCard';

const ProfileScreen = ({route, navigation}) => {
  const {userId} = route.params;
  const [userPosts, setUserPosts] = useState();
  const fetchUserPost = async () => {
    const token = await retrieve();
    await axios({
      method: 'get',
      url: `${api.getUserPost}/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setUserPosts(res.data.posts);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUserPost();
  }, []);
  return (
    <View style={{flex: 1}}>
      {userPosts && (
        <FlatList
          data={userPosts}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <PostCard
              item={item}
              onPress={() =>
                navigation.navigate('PostDetail', {postId: item._id})
              }
            />
          )}
        />
      )}
    </View>
  );
};

export default ProfileScreen;
