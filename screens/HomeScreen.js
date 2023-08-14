import React, {useContext, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import PostButton from '../components/PostButton';
import axios from 'axios';
import {retrieve} from '../utils/asyncStore';
import {api} from '../config/api';
import UserContext from '../context/UserContext';
import PostCard from '../components/PostCard';
import {colors} from '../utils/colors';

const HomeScreen = ({navigation}) => {
  const {setUser} = useContext(UserContext);
  const [posts, setPosts] = useState();
  const fetchUserInfo = async () => {
    console.log('calling api for fetching the user');
    await retrieve()
      .then(async token => {
        await axios({
          method: 'get',
          url: api.home,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(res => {
            if (res.status === 200) {
              setUser(res.data);
            }
          })
          .catch(error => {
            return Alert.alert('Error fetching the user content!');
          });
      })
      .catch(error => {
        return Alert.alert('Error fetching the user content!');
      });
  };

  const fetchAllPost = async () => {
    console.log('calling api for fetching the post');
    await retrieve().then(async token => {
      await axios({
        method: 'get',
        url: api.getAllPost,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => {
          setPosts(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  useEffect(() => {
    fetchUserInfo();
    const unsubscribe = navigation.addListener('focus', () => {
      fetchAllPost();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader onPressAvatar={() => navigation.openDrawer()} />
      {posts && (
        <FlatList
          data={posts}
          keyExtractor={post => post._id}
          renderItem={({item}) => (
            <PostCard
              item={item}
              onPress={() =>
                navigation.navigate('PostDetail', {postId: item._id})
              }
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
      <PostButton onPress={() => navigation.navigate('PostContent')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default HomeScreen;
