import React, {useContext, useEffect} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AppHeader from '../components/AppHeader';
import PostButton from '../components/PostButton';
import axios from 'axios';
import {retrieve} from '../utils/asyncStore';
import {api} from '../config/api';
import UserContext from '../context/UserContext';
import PostCard from '../components/PostCard';

const HomeScreen = ({navigation}) => {
  const {setUser, user} = useContext(UserContext);
  const fetchUserInfo = async () => {
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

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <AppHeader onPressAvatar={() => navigation.openDrawer()} />
      {/* Flatlist of posts */}
      <PostCard onPress={() => navigation.navigate('PostDetail')} />
      <PostCard />
      <PostCard />
      <PostButton onPress={() => navigation.navigate('PostContent')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
