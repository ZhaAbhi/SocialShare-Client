import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import LoadingImage from '../assets/images/loadingImage.jpeg';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import RepostIcon from 'react-native-vector-icons/EvilIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import UserContext from '../context/UserContext';
import {useNavigation} from '@react-navigation/native';
import serverUrl from '../config/serverAccess';

const FeedContainer = ({item, onPress}) => {
  const navigation = useNavigation();
  const {user} = useContext(UserContext);
  const [like, setLike] = useState();
  const {email} = item.postedBy;
  const {likesBy, commentsBy} = item;

  const getFirstNameFromEmail = email.match(/^[A-Za-z]+/)[0];

  const handlePostLike = async postId => {
    const getToken = await AsyncStorage.getItem('token');
    if (getToken) {
      try {
        await axios({
          url: `${serverUrl}/post/like/${postId}`,
          method: 'post',
          headers: {
            Authorization: getToken,
          },
        }).then(res => {
          if (res.data.message === 'You liked the post') {
            setLike(true);
          } else {
            setLike(false);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const matchLikesByUser = () => {
    if (likesBy?.includes(user?._id)) {
      return setLike(true);
    }
    return setLike(false);
  };

  useEffect(() => {
    matchLikesByUser();
  }, [likesBy, commentsBy]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <Image
        source={LoadingImage}
        style={{height: 50, width: 50, borderRadius: 25}}
      />
      <View style={{marginLeft: 5, flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontFamily: 'Poppins-semibold', marginRight: 5}}>
            {getFirstNameFromEmail}
          </Text>
          <Text style={{fontFamily: 'Poppins-light', color: 'darkgrey'}}>
            @{item.postedBy.username}
          </Text>
        </View>

        <Text style={{fontFamily: 'Poppins-light', color: '#000'}}>
          {item.content}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'space-between',
          }}>
          {/* like */}
          <TouchableOpacity onPress={() => handlePostLike(item._id)}>
            <Icons
              name="heart-outline"
              color={like ? 'red' : 'darkgrey'}
              size={18}
            />
          </TouchableOpacity>

          {/* comment */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CommentModal', {postId: item._id})
            }>
            <Icons name="comment-outline" color="darkgrey" size={18} />
          </TouchableOpacity>
          {/* repost */}
          <RepostIcon
            name="retweet"
            color="darkgrey"
            size={25}
            onPress={() => console.log('Like pressed')}
          />
          {/* share */}
          <Icons
            name="share-variant"
            color="darkgrey"
            size={18}
            onPress={() => console.log('Like pressed')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeedContainer;
