import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import Entypo from 'react-native-vector-icons/Entypo';
import AppIcon from './AppIcon';
import moment from 'moment';
import {displayImage} from '../config/api';

const PostContainer = ({item, onPress}) => {
  const {_id, content, createdAt, postedBy, postImage} = item;
  const firstName = postedBy.email.match(/^(.*)@/)?.[1];
  const postDate = moment(createdAt).fromNow(true);

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={loadingImage} style={styles.avatar} />
      <View style={styles.inner}>
        <View style={styles.postedByContainer}>
          <Text style={styles.firstName}>{firstName}</Text>
          <Text style={styles.username}>@{postedBy.username}</Text>
          <Text style={styles.postDate}>• {postDate}</Text>
          <Entypo
            name="dots-three-horizontal"
            size={15}
            color="grey"
            style={{marginLeft: 'auto'}}
          />
        </View>
        {content !== '' && <Text style={styles.contentText}>{content}</Text>}
        {postImage && (
          <TouchableOpacity>
            <Image
              source={{
                uri: `${displayImage}/${postImage}`,
              }}
              style={styles.postedImage}
            />
          </TouchableOpacity>
        )}
        <View style={styles.iconContainer}>
          <AppIcon iconName="heart" />
          <AppIcon iconName="retweet" />
          <AppIcon iconName="comment" />
          <AppIcon iconName="share-google" />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  inner: {
    marginLeft: 10,
    flex: 1,
  },
  postedByContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  firstName: {
    fontFamily: 'Poppins-semiBold',
    color: '#000',
  },
  username: {
    marginLeft: 3,
    fontFamily: 'Poppins-Light',
    color: 'grey',
    fontSize: 12.5,
  },
  postDate: {
    marginLeft: 10,
    fontSize: 12.5,
    color: 'grey',
    fontFamily: 'Poppins-Light',
  },
  contentText: {
    fontFamily: 'Poppins-Regular',
    color: '#000',
    lineHeight: 20,
  },
  postedImage: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15,
  },
  iconContainer: {
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default PostContainer;
