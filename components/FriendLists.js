import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import {colors} from '../utils/colors';

const FriendLists = () => {
  return (
    <View style={{marginBottom: 10}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={loadingImage}
          style={{height: 40, width: 40, borderRadius: 20}}
        />
        <View style={{marginLeft: 5}}>
          <Text style={{fontSize:16, color:colors.black}}>Email</Text>
          <Text style={{fontSize:14, color:colors.black}}>@username</Text>
          <Text style={{fontSize:16, color:colors.black, marginTop:5}}>This is user description.</Text>
        </View>
        <View style={{marginLeft: 'auto', }}>
          <TouchableOpacity style={{backgroundColor: colors.blue, paddingLeft:10, paddingRight:10, paddingTop:3, paddingBottom:3, borderRadius:20}}>
            <Text style={{color:colors.eelightgray, fontWeight:"bold"}}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: colors.lightgray,
          marginTop: 5,
        }}></View>
    </View>
  );
};
export default FriendLists;
