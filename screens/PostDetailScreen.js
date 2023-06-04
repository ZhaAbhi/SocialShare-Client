import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import LoadingImage from '../assets/images/loadingImage.jpeg';
import moment from 'moment';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import RepostIcon from 'react-native-vector-icons/EvilIcons';
import axios from 'axios';
import UserContext from '../context/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PostDetailScreen = ({route, navigation}) => {
  const {postId} = route.params;
  const {user} = useContext(UserContext);
  const [item, setItem] = useState();
  const [like, setLike] = useState();

  const emailFirstName = item && item.postedBy.email.match(/^[A-Za-z]+/)[0];

  const handlePostLike = async postId => {
    const getToken = await AsyncStorage.getItem('token');
    if (getToken) {
      try {
        await axios({
          url: `http://192.168.1.71:8000/post/like/${postId}`,
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

  const getPostDetails = async () => {
    try {
      await axios({
        url: `http://192.168.1.71:8000/post/${postId}`,
        method: 'get',
      }).then(res => {
        if (res.data.likesBy.includes(user._id)) {
          setLike(true);
        }
        setItem(res.data);
      });
    } catch (error) {
      console.log(error);
      Alert.alert('Error retrieving post');
    }
  };
  useEffect(() => {
    getPostDetails();
  }, []);
  const postedDate = item && moment(item.createdAt).fromNow();
  return (
    item && (
      <SafeAreaView>
        <View style={{padding: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Image
              source={LoadingImage}
              style={{height: 40, width: 40, borderRadius: 25, marginRight: 10}}
            />
            <View>
              <Text style={{fontFamily: 'Poppins-SemiBold'}}>
                {emailFirstName}
              </Text>
              <Text style={{fontFamily: 'Poppins-Light', color: 'grey'}}>
                @{item.postedBy.username}
              </Text>
            </View>
          </View>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16}}>
            {item.content}
          </Text>
          <View style={{marginTop: 10}}>
            <Text
              style={{
                marginBottom: 10,
                fontFamily: 'Poppins-Light',
                color: 'grey',
                fontSize: 13,
              }}>
              • {postedDate}
            </Text>
            <View
              style={{
                height: 0.5,
                width: '100%',
                backgroundColor: 'lightgrey',
                marginBottom: 10,
              }}></View>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Text style={{fontWeight: 'bold'}}>{item.likesBy.length}</Text>
            <Text style={{marginLeft: 5}}>Likes</Text>
          </View>
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: 'lightgrey',
              marginBottom: 10,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <TouchableOpacity onPress={() => handlePostLike(item._id)}>
              <Icons
                name="heart-outline"
                color={like ? 'red' : 'darkgrey'}
                size={18}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icons name="comment-outline" color="darkgrey" size={18} />
            </TouchableOpacity>
            {/* repost */}
            <TouchableOpacity>
              <RepostIcon name="retweet" color="darkgrey" size={25} />
            </TouchableOpacity>
            {/* share */}
            <TouchableOpacity>
              <Icons name="share-variant" color="darkgrey" size={18} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: 'lightgrey',
            }}></View>
        </View>
        <ScrollView>
          <Text style={{marginBottom: 40}}>This is my comment</Text>
          <Text style={{marginBottom: 40}}>This is my comment</Text>
          <Text style={{marginBottom: 40}}>This is my comment</Text>
          <Text style={{marginBottom: 40}}>This is my comment</Text>
          <Text style={{marginBottom: 40}}>This is my comment</Text>
          <Text style={{marginBottom: 40}}>This is my comment</Text>
          <Text style={{marginBottom: 40}}>This is my comment</Text>
          <Text style={{marginBottom: 40}}>This is my comment</Text>
          <Text style={{marginBottom: 40}}>This is my comment</Text>
        </ScrollView>
      </SafeAreaView>
    )
  );
};

export default PostDetailScreen;
