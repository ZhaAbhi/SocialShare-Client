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
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
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
    postDetail && (
      <>
        <ScrollView style={{flex: 1, padding: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={loadingImage}
              style={{height: 40, width: 40, borderRadius: 20}}
            />
            <View style={{marginLeft: 5}}>
              <Text>{postDetail.postedBy.email.match(/^(.*)@/)?.[1]}</Text>
              <Text>@{postDetail.postedBy.username}</Text>
            </View>
          </View>

          <Text style={{marginTop: 5}}>{postDetail.content}</Text>
          {postDetail?.postImage && (
            <Image
              source={{uri: `${displayImage}/${postDetail.postImage}`}}
              style={{
                aspectRatio: 16 / 9,
                borderRadius: 20,
                marginTop: 5,
              }}
            />
          )}

          <View style={{marginTop: 10}}>
            <Text>Posted on: {moment(postDetail.createdAt).fromNow()}</Text>
          </View>
          <View
            style={{
              marginTop: 8,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 15,
            }}>
            <AppIcon iconName="heart" />
            <AppIcon iconName="retweet" />
            <AppIcon iconName="comment" />
            <AppIcon iconName="share-google" />
          </View>
          <View
            style={{
              marginTop: 8,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}></View>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              marginTop: 4,
              textDecorationLine: 'underline',
            }}>
            All Comments
          </Text>
          <View>
            {postDetail?.commentsBy.length === 0 && (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '20%',
                }}>
                <Text>No comments</Text>
              </View>
            )}
          </View>
          <View style={{marginTop: 5, marginBottom: 20}}>
            {/* Render the comment on scroll view */}

            {postDetail?.commentsBy.length > 0 &&
              postDetail.commentsBy.map((item, i) => (
                <CommentPost key={i} item={item} />
              ))}
          </View>
        </ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={70}>
          <View>
            <TextInput style={{borderWidth: 1}} />
          </View>
        </KeyboardAvoidingView>
      </>
    )
  );
};

export default FeedDetailScreen;
