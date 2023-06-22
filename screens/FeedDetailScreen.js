import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import {displayImage, retrieveSinglePost} from '../config/api';
import loadingImage from '../assets/images/loadingImage.jpeg';
import AppIcon from '../components/AppIcon';
import moment from 'moment';
import CommentPost from '../components/CommentPost';

const FeedDetailScreen = ({navigation, route}) => {
  const {postId} = route.params;
  const [postDetail, setPostDetail] = useState();

  const fetchPostDetail = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      try {
        await axios({
          method: 'get',
          url: `${retrieveSinglePost}/${postId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then(res => {
          if (res.status === 200) {
            setPostDetail(res.data.post);
          }
        });
      } catch (error) {
        return Alert.alert('Something went wrong, Try Again!!');
      }
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchPostDetail();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Pressable onPress={Keyboard.dismiss}>
        <View>
          <Text>Hello</Text>
        </View>
      </Pressable>
      <KeyboardAvoidingView
        style={{flex: 1, justifyContent: 'flex-end', backgroundColor:'red'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={60}>
        <TextInput style={{borderWidth: 1}} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default FeedDetailScreen;
