import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import LoadingImage from '../assets/images/loadingImage.jpeg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import serverUrl from '../config/serverAccess';

const PostContentScreen = ({navigation}) => {
  const [content, setContent] = useState();

  const handlePost = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        await axios({
          url: `${serverUrl}/post`,
          method: 'post',
          data: {
            content,
          },
          headers: {
            Authorization: token,
          },
        }).then(res => {
          if (res.data) {
            //TODO: After successfull response status, call the /post/retrieve api and
            //store in context api
            Alert.alert('You have successfully posted!');
            navigation.goBack();
          }
        });
      }
    } catch (error) {
      console.log('client error', error);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 15,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            backgroundColor: 'darkblue',
            height: 25,
            width: 25,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}>
          <Text style={{color: '#fff', fontFamily: 'Poppins-semiBold'}}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePost}
          style={{
            marginLeft: 'auto',
            backgroundColor: 'darkblue',
            padding: 3,
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: 'center',
            borderRadius: 15,
          }}>
          <Text style={{color: '#fff', fontFamily: 'Poppins-semiBold'}}>
            Post
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{height: 1, width: '100%', backgroundColor: 'darkgrey'}}></View>
      <View style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Image
            source={LoadingImage}
            style={{height: 30, width: 30, borderRadius: 15}}
          />
          <Text
            style={{
              marginLeft: 10,
              backgroundColor: 'darkblue',
              color: '#fff',
              fontFamily: 'Poppins-semiBold',
            }}>
            Public
          </Text>
        </View>
        <TextInput
          onChangeText={text => setContent(text)}
          autoFocus={true}
          placeholder="What's happening?"
          multiline={true}
          textAlignVertical="top"
          style={{
            height: '60%',
            borderWidth: 1,
            borderColor: '#000',
            padding: 5,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PostContentScreen;
