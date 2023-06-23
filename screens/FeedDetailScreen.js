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
    <>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <Pressable onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={{padding: 5}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={loadingImage}
                  style={{height: 40, width: 40, borderRadius: 20}}
                />
                <View style={{marginLeft: 5}}>
                  <Text>Name</Text>
                  <Text>@Username</Text>
                </View>
              </View>
              <View>
                <Text>This is my content</Text>
                <Image
                  source={loadingImage}
                  style={{height: 200, width: '100%'}}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    justifyContent: 'space-between',
                  }}>
                  <AppIcon iconName="heart" />
                  <AppIcon iconName="retweet" />
                  <AppIcon iconName="comment" />
                  <AppIcon iconName="share-google" />
                </View>
              </View>
              <View>
                <Text style={{marginBottom: 40}}>This is my comment</Text>
                <Text style={{marginBottom: 40}}>This is my comment</Text>
                <Text style={{marginBottom: 40}}>This is my comment</Text>
                <Text style={{marginBottom: 40}}>This is my comment</Text>
                <Text style={{marginBottom: 40}}>This is my comment</Text>
                <Text style={{marginBottom: 40}}>This is my comment</Text>
                <Text style={{marginBottom: 40}}>This is my comment</Text>
                <Text style={{marginBottom: 40}}>This is my comment</Text>
                <Text style={{marginBottom: 40}}>This is my comment</Text>
                <Text style={{marginBottom: 40}}>This is my comment</Text>
                <Text style={{marginBottom: 40}}>This is my comment</Text>
              </View>
            </View>
          </ScrollView>
        </Pressable>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={70}>
        <TextInput style={{borderWidth: 1}} />
      </KeyboardAvoidingView>
    </>
  );
};

export default FeedDetailScreen;
