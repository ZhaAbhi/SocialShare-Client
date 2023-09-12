import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {retrieve} from '../utils/asyncStore';
import axios from 'axios';
import {api} from '../config/api';
import PostCard from '../components/PostCard';
import loadingImage from '../assets/images/loadingImage.jpeg';
import coverImage from '../assets/images/cover.jpeg';
import {colors} from '../utils/colors';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import CalendarIcon from 'react-native-vector-icons/Ionicons';
import BackIcon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import UserContext from '../context/UserContext';

const ProfileScreen = ({route, navigation}) => {
  const {user} = useContext(UserContext);
  const {userId} = route.params;
  const [userPosts, setUserPosts] = useState();
  const [userInfo, setUserInfo] = useState();
  const firstNameFromEmail = userInfo && userInfo.email.match(/^([^@]+)/)[1];
  const fetchUserPost = async () => {
    const token = await retrieve();
    await axios({
      method: 'get',
      url: `${api.getUserPost}/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setUserInfo(res.data);
        setUserPosts(res.data.posts);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUserPost();
  }, []);
  return (
    <View style={{flex: 1}}>
      {userInfo && (
        <View>
          <Image
            source={coverImage}
            style={{height: 100, resizeMode: 'cover'}}
          />
          <TouchableOpacity
            style={{position: 'absolute', top: 25, padding: 10}}
            onPress={() => navigation.goBack()}>
            <BackIcon name="arrow-back" color={colors.white} size={22} />
          </TouchableOpacity>
          <View style={{padding: 10, flexDirection: 'row'}}>
            <View style={{top: -40}}>
              <Image
                source={loadingImage}
                style={{
                  height: 80,
                  width: 80,
                  resizeMode: 'cover',
                  borderRadius: 40,
                  borderWidth: 2,
                  borderColor: colors.white,
                }}
              />
              <View style={{marginLeft: 10}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: colors.black,
                  }}>
                  {firstNameFromEmail}
                </Text>
                <Text style={{color: colors.darkgray}}>
                  @{userInfo.username}
                </Text>
                <View>
                  {userInfo.bio && (
                    <Text style={{marginTop: 10}}>
                      This is my bio and only display if there is content
                      otherwise dont display
                    </Text>
                  )}

                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <LocationIcon
                        name="location"
                        size={15}
                        color={colors.darkgray}
                      />
                      <Text style={{marginLeft: 5, color: colors.darkgray}}>
                        Nepal
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: 10,
                      }}>
                      <CalendarIcon
                        name="calendar"
                        size={15}
                        color={colors.darkgray}
                      />
                      <Text style={{marginLeft: 5, color: colors.darkgray}}>
                        Joined on {moment(userInfo.createdAt).fromNow()}
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 10,
                      }}>
                      <Text
                        style={{
                          marginRight: 5,
                          fontWeight: 'bold',
                          color: colors.black,
                        }}>
                        {userInfo.followings.length}
                      </Text>
                      <Text>Followings</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          marginRight: 5,
                          fontWeight: 'bold',
                          color: colors.black,
                        }}>
                        {userInfo.followers.length}
                      </Text>
                      <Text>Followers</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginLeft: 'auto'}}>
              {userId === user._id && (
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.black,
                    width: 100,
                    height: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}>
                  <Text style={{color: colors.eelightgray, fontWeight: 'bold'}}>
                    Edit Profile
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      )}

      <View style={{marginTop: -35}}>
        <View style={{borderWidth: 1, borderColor: colors.darkgray}}></View>
        {userPosts && (
          <FlatList
            data={userPosts}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
              <PostCard
                item={item}
                onPress={() =>
                  navigation.navigate('PostDetail', {postId: item._id})
                }
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default ProfileScreen;
