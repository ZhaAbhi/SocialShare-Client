import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import LoadingImage from '../assets/images/loadingImage.jpeg';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import RepostIcon from 'react-native-vector-icons/EvilIcons';

const FeedContainer = ({item, onPress}) => {
  const {email} = item.postedBy;
  const getFirstNameFromEmail = email.match(/^[A-Za-z]+/)[0];
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
          <Icons
            name="heart-outline"
            color="darkgrey"
            size={18}
            onPress={() => console.log('Like pressed')}
          />
          {/* comment */}
          <Icons
            name="comment-outline"
            color="darkgrey"
            size={18}
            onPress={() => console.log('Like pressed')}
          />
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
