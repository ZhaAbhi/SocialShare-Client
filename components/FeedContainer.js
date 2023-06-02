import React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';

import LoadingImage from '../assets/images/loadingImage.jpeg';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import RepostIcon from 'react-native-vector-icons/EvilIcons';

const FeedContainer = ({item}) => {
  const {email} = item.postedBy;
  const getFirstNameFromEmail = email.match(/^[A-Za-z]+/)[0];
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
      }}>
      <Image
        source={LoadingImage}
        style={{height: 50, width: 50, borderRadius: 25}}
      />
      <View style={{marginLeft: 5, flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{getFirstNameFromEmail}</Text>
          <Text>@{item.postedBy.username}</Text>
        </View>

        <Text>{item.content}</Text>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'space-between',
          }}>
          {/* like */}
          <Icons name="heart-outline" color="darkgrey" size={18} />
          {/* comment */}
          <Icons name="comment-outline" color="darkgrey" size={18} />
          {/* repost */}
          <RepostIcon name="retweet" color="darkgrey" size={25} />
          {/* share */}
          <Icons name="share-variant" color="darkgrey" size={18} />
        </View>
      </View>
    </View>
  );
};

export default FeedContainer;
