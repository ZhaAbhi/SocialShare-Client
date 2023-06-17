import React from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import {colors} from '../config/colors';
import loadingImage from '../assets/images/loadingImage.jpeg';

const PostContentScreen = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={{fontSize: 20, color: '#000'}}>X</Text>
        </Pressable>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 2,
            paddingBottom: 2,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: '#fff',
              fontFamily: 'Poppins-semiBold',
            }}>
            Post
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={loadingImage}
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              resizeMode: 'cover',
              marginRight: 5,
            }}
          />
          <View
            style={{
              backgroundColor: colors.primary,
              paddingRight: 5,
              paddingLeft: 5,
              borderRadius: 2,
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Poppins-semiBold',
                fontSize: 13,
              }}>
              Public
            </Text>
          </View>
        </View>
        <View style={{marginLeft: 15}}>
          <TextInput
            textAlignVertical="top"
            multiline={true}
            autoFocus={true}
            style={{height: '70%', padding: 5}}
          />
        </View>
      </View>
    </View>
  );
};

export default PostContentScreen;
