import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import PostCardIcon from '../components/PostCardIcon';
import moment from 'moment';
import {colors} from '../utils/colors';
import {retrieveToken} from '../utils/store';
import axios from 'axios';
import PostCommentCard from '../components/PostCommentCard';

const PostContentDetailScreen = ({route}) => {
  const [comments, setComments] = useState([]);
  const {item} = route.params;
  const extractNameFromEmail = item.postedBy.email
    .split('@')[0]
    .split('.')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  const fetchComments = async () => {
    const token = await retrieveToken();
    await axios({
      method: 'get',
      url: `http://192.168.1.87:8000/post/comments/${item._id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setComments(res.data.comments);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={75}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1, justifyContent: 'space-between', padding: 10}}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 7,
              }}>
              <Image
                source={loadingImage}
                style={{height: 50, width: 50, borderRadius: 25}}
              />
              <View style={{marginLeft: 5}}>
                <Text>{extractNameFromEmail}</Text>
                <Text>@{item.postedBy.username}</Text>
              </View>
            </View>
            <Text>{item.content}</Text>
            {item.contentImage && (
              <Image
                source={item.contentImage}
                style={{
                  width: '100%',
                  aspectRatio: 16 / 9,
                  marginVertical: 10,
                  borderRadius: 15,
                }}
              />
            )}
            <View style={{marginTop: 10}}>
              <Text>{moment(item.createdAt).fromNow()}</Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: colors.darkgray,
                marginTop: 10,
              }}></View>
            <View
              style={{
                marginTop: 15,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <PostCardIcon iconName="heart" />
              <PostCardIcon iconName="retweet" />
              <PostCardIcon iconName="comment" />
              <PostCardIcon iconName="share-google" />
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: colors.darkgray,
                marginTop: 10,
              }}></View>
            <View>
              {comments.length > 0 ? (
                <>
                  <Text>All comments</Text>
                  <FlatList
                    data={comments}
                    keyExtractor={item => item._id}
                    renderItem={({item}) => <PostCommentCard comment={item} />}
                  />
                </>
              ) : (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '50%',
                  }}>
                  <Text>No comments</Text>
                </View>
              )}
            </View>
          </View>
          <View>
            <TextInput
              style={{height: 40, borderWidth: 1, borderColor: 'red'}}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default PostContentDetailScreen;
