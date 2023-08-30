import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {retrieve} from '../utils/asyncStore';
import axios from 'axios';
import {api} from '../config/api';
import PostCard from '../components/PostCard';
import loadingImage from '../assets/images/loadingImage.jpeg';
import {colors} from '../utils/colors';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import CalendarIcon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({route, navigation}) => {
  const {userId} = route.params;
  const [userPosts, setUserPosts] = useState();
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
      {userPosts && (
        <View>
          <Image
            source={loadingImage}
            style={{height: 100, resizeMode: 'cover'}}
          />
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
                  Abhishek
                </Text>
                <Text style={{color: colors.darkgray}}>@Abhishek</Text>
                <View>
                  <Text style={{marginTop: 10}}>
                    This is my bio and only display if there is content
                    otherwise dont display
                  </Text>
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
                        Joined on August 2023
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
                        11
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
                        11
                      </Text>
                      <Text>Followings</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginLeft: 'auto'}}>
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
            </View>
          </View>
        </View>
      )}

      <View style={{marginTop:-35}}>
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
