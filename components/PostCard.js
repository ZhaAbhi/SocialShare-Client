import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import AppReactIcon from './AppReactIcon';
import {colors} from '../utils/colors';

const PostCard = ({onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.upper}>
        <Image source={loadingImage} style={styles.avatar} />
        <View style={styles.intro}>
          <View style={styles.postedBy}>
            <Text style={styles.name}>Abhishek</Text>
            <Text style={styles.username}>@Abhishek</Text>
          </View>
          <Text style={styles.content}>This is my content content</Text>
          {/* <View style={{marginTop: 5}}>
            <Image source={loadingImage} style={styles.uploadImage} />
          </View> */}

          {/* footer icon */}
          <View style={styles.iconContainer}>
            <AppReactIcon name="comment" />
            <AppReactIcon name="retweet" />
            <AppReactIcon name="heart" />
            <AppReactIcon name="share-google" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
