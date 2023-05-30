import React from 'react';
import {View, Text, Image} from 'react-native';
import LoadingImage from '../assets/images/loadingImage.jpeg';

const AppHeader = ({username}) => {
  return (
    <View style={{padding: 10}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={LoadingImage}
          style={{height: 30, width: 30, borderRadius: 15, marginRight: 5}}
        />
        <Text>Hi! {username}</Text>
      </View>
    </View>
  );
};

export default AppHeader;
