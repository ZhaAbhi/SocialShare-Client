import React, {useEffect, useState} from 'react';
import {
  Text,
  Image,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import PostCardIcon from '../components/PostCardIcon';
import moment from 'moment';
import {colors} from '../utils/colors';
import {retrieveToken} from '../utils/store';
import axios from 'axios';
import PostCommentCard from '../components/PostCommentCard';
import CommentIcon from 'react-native-vector-icons/Ionicons';
import {api} from '../config/api';

const PostContentDetailScreen = ({route}) => {
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState('');

  const {item} = route.params;
  const extractNameFromEmail = item.postedBy.email
    .split('@')[0]
    .split('.')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  const handlePostComment = async () => {
    const token = await retrieveToken();
    await axios({
      method: 'post',
      url: `${api.postComment}/${item._id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        comment: commentContent,
      },
    })
      .then(res => {
        if (res.status === 201) {
          console.log('Successfully commented on post');
          setCommentContent('');
          fetchComments();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const fetchComments = async () => {
    const token = await retrieveToken();
    await axios({
      method: 'get',
      url: `${api.getComments}/${item._id}`,
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
      style={{flex: 1, padding: 10}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={70}>
      <View style={{flex: 1}}>
        {/* header */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={loadingImage}
            style={{height: 50, width: 50, borderRadius: 25}}
          />
          <View style={{marginLeft: 5}}>
            <Text>{extractNameFromEmail}</Text>
            <Text>@{item.postedBy.username}</Text>
          </View>
        </View>
        <Text style={{marginTop: 10}}>{item.content}</Text>
        <Text style={{marginTop: 15, marginBottom: 10}}>
          Posted on: {moment(item.createdAt).fromNow()}
        </Text>
        <View
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: colors.lightgray,
          }}></View>
        {/* icons */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <PostCardIcon iconName="heart" />
          <PostCardIcon iconName="retweet" />
          <PostCardIcon iconName="share-google" />
        </View>
        <View
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            marginTop: 10,
            borderColor: colors.lightgray,
          }}></View>

        {/* Flatlist of comments */}
        <FlatList
          data={comments}
          keyExtractor={item => item._id}
          renderItem={({item}) => <PostCommentCard comment={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <TextInput
          value={commentContent}
          onChangeText={text => setCommentContent(text)}
          placeholder="Add your comments"
          placeholderTextColor={colors.black}
          multiline
          style={{
            flex: 1,
            backgroundColor: colors.lightgray,
            padding: 10,
            borderRadius: 20,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            handlePostComment(), Keyboard.dismiss();
          }}
          disabled={commentContent === ''}
          style={{marginLeft: 5}}>
          <CommentIcon
            name="send-sharp"
            color={commentContent === '' ? colors.dimBlue : colors.blue}
            size={25}
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PostContentDetailScreen;
