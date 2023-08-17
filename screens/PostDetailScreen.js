import React, {useContext, useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import CommentCard from '../components/CommentCard';
import {colors} from '../utils/colors';
import SendIcon from 'react-native-vector-icons/MaterialIcons';
import {retrieve} from '../utils/asyncStore';
import axios from 'axios';
import {api} from '../config/api';
import moment from 'moment';
import loadingImage from '../assets/images/loadingImage.jpeg';
import AppReactIcon from '../components/AppReactIcon';
import LikeIcon from '../components/LikeIcon';
import UserContext from '../context/UserContext';

const PostDetailScreen = ({route, navigation}) => {
  const {postId} = route.params;
  const [commentContent, setCommentContent] = useState('');
  const [updatedPost, setUpdatedPost] = useState();
  const {user} = useContext(UserContext);
  const [like, setLike] = useState();
  const [likeCount, setLikeCount] = useState();
  const [comment, setComment] = useState([]);

  const handleComment = async () => {
    const token = await retrieve();
    await axios({
      method: 'post',
      url: `${api.postComment}/${postId}`,
      data: {
        commentContent: commentContent,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setComment(res.data.comments);
        setCommentContent('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleLike = async () => {
    const token = await retrieve();
    await axios({
      method: 'put',
      url: `${api.postLike}/${postId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        const updatedLike = res.data.likes.includes(user._id);
        setLikeCount(res.data.likes.length);
        setLike(updatedLike);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const emailFirstName =
    updatedPost && updatedPost.postedBy.email.match(/^([^@]+)/)[1];

  const fetchLatestPost = async () => {
    const token = await retrieve();
    await axios({
      method: 'get',
      url: `${api.post}/${postId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setUpdatedPost(res.data);
        setComment(res.data.comments);
        const fetchLike = res.data.likes.includes(user._id);
        setLikeCount(res.data.likes.length);
        setLike(fetchLike);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchLatestPost();
    });
    return unsubscribe;
  }, []);

  return (
    updatedPost && (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80}>
        <ScrollView>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', margin: 5}}>
              <Image
                source={loadingImage}
                style={{height: 50, width: 50, borderRadius: 25}}
              />
              <View style={{marginLeft: 5}}>
                <Text style={{fontSize: 16, color: colors.black}}>
                  {emailFirstName}
                </Text>
                <Text style={{fontSize: 16, color: colors.darkgray}}>
                  @{updatedPost.postedBy.username}
                </Text>
              </View>
            </View>
            <View style={{padding: 2}}>
              <Text
                style={{
                  marginBottom: 5,
                  marginLeft: 10,
                  fontSize: 17,
                  color: colors.black,
                }}>
                {updatedPost.content}
              </Text>
              {updatedPost.contentImage && (
                <Image
                  source={{
                    uri: `${api.displayImage}/${updatedPost.contentImage}`,
                  }}
                  style={{
                    height: 170,
                    width: '100%',
                    resizeMode: 'cover',
                    borderRadius: 15,
                  }}
                />
              )}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    marginBottom: 5,
                    marginTop: 10,
                    marginLeft: 10,
                    fontSize: 15,
                    color: colors.darkgray,
                  }}>
                  · Posted on: {moment(updatedPost.createdAt).fromNow()}
                </Text>
                {comment.length > 0 && (
                  <Text
                    style={{
                      marginBottom: 5,
                      marginTop: 10,
                      marginLeft: 10,
                      color: colors.darkgray,
                      fontSize: 15,
                    }}>
                    · {comment.length} comment
                  </Text>
                )}
              </View>

              <View
                style={{
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: colors.lightgray,
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 7,
                  marginBottom: 7,
                  padding: 5,
                }}>
                <LikeIcon
                  name={like ? 'heart' : 'heart-outline'}
                  color={like ? 'red' : colors.black}
                  count={likeCount > 0 ? likeCount : ''}
                  onPress={handleLike}
                />
                <AppReactIcon name="retweet" />
                <AppReactIcon name="share-google" />
              </View>
              <View
                style={{
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: colors.lightgray,
                }}></View>
            </View>
            <Text style={styles.comment}>All comments :</Text>
            <ScrollView style={{padding: 10}}>
              {comment.map(item => {
                return <CommentCard item={item} />;
              })}
            </ScrollView>
          </View>
        </ScrollView>
        <View style={styles.commentContainer}>
          <TextInput
            placeholder="Add your comment here"
            textAlignVertical="top"
            multiline
            value={commentContent}
            onChangeText={text => setCommentContent(text)}
            style={styles.textInput}
          />
          <TouchableOpacity
            onPress={handleComment}
            style={{marginLeft: 5}}
            disabled={commentContent.trim() === ''}>
            <SendIcon
              name="send"
              size={24}
              color={
                commentContent.trim() === '' ? colors.dimBlue : colors.blue
              }
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  comment: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.black,
  },
  textInput: {
    padding: 10,
    backgroundColor: colors.elightgray,
    paddingLeft: 15,
    borderWidth: 0.3,
    borderColor: colors.darkgray,
    borderRadius: 20,
    flex: 1,
  },
  commentContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostDetailScreen;
