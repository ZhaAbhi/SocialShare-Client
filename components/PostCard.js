import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import AppReactIcon from './AppReactIcon';
import {colors} from '../utils/colors';
import {api} from '../config/api';
import LikeIcon from './LikeIcon';
import UserContext from '../context/UserContext';
import {retrieve} from '../utils/asyncStore';
import axios from 'axios';

const PostCard = ({item, onPress}) => {
  const {postedBy, likes} = item;
  const {user} = useContext(UserContext);
  const [like, setLike] = useState(user.likes.includes(item._id));
  const [likeCount, setLikeCount] = useState(likes.length);
  const emailFirstName = postedBy.email.match(/^([^@]+)/)[1];

  const handleLike = async () => {
    const token = await retrieve();
    await axios({
      method: 'put',
      url: `${api.postLike}/${item._id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        const updatedLike = res.data.likes.includes(user._id);
        const updatedLikeCount = res.data.likes.length;
        setLike(updatedLike);
        setLikeCount(updatedLikeCount);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    item && (
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.container}
        onPress={onPress}>
        <View style={styles.upper}>
          <Image source={loadingImage} style={styles.avatar} />
          <View style={styles.intro}>
            <View style={styles.postedBy}>
              <Text style={styles.name}>{emailFirstName}</Text>
              <Text style={styles.username}>@{postedBy.username}</Text>
            </View>
            <Text style={styles.content}>{item.content}</Text>
            {item.contentImage && (
              <View style={{marginTop: 5}}>
                <Image
                  source={{
                    uri: `${api.displayImage}/${item.contentImage}`,
                  }}
                  style={styles.uploadImage}
                />
              </View>
            )}

            {/* footer icon */}
            <View style={styles.iconContainer}>
              <AppReactIcon name="comment" count={item.comments.length} />
              <AppReactIcon name="retweet" count={25} />
              <LikeIcon
                onPress={handleLike}
                name={like ? 'heart' : 'heart-outline'}
                color={like ? 'red' : colors.black}
                count={likeCount > 0 ? likeCount : ''}
              />
              <AppReactIcon name="share-google" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginVertical: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.lightgray,
  },
  upper: {
    flexDirection: 'row',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  intro: {
    flex: 1,
    marginLeft: 5,
  },
  postedBy: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 15,
    color: colors.black,
  },
  username: {
    fontSize: 15,
    marginLeft: 5,
    color: colors.darkgray,
  },
  content: {
    fontSize: 15,
    color: colors.black,
    marginTop: 5,
  },
  uploadImage: {
    height: 170,
    width: '100%',
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 10,
  },
  iconContainer: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default PostCard;
