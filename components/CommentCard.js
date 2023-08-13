import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import {colors} from '../utils/colors';

const CommentCard = () => {
  return (
    <View style={styles.container}>
      <Image source={loadingImage} style={styles.avatar} />
      <View style={styles.postedBy}>
        <View style={styles.postedByNameContainer}>
          <Text>Abhishek</Text>
          <Text style={styles.username}>@Abhishek</Text>
        </View>
        <Text style={styles.comment}>This is my comment</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.lightgray,
    marginVertical: 10,
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 20,
  },
  postedBy: {
    marginLeft: 5,
    flex: 1,
  },
  postedByNameContainer: {
    flexDirection: 'row',
  },
  username: {
    marginLeft: 5,
    color: colors.darkgray,
  },
  comment: {
    marginTop: 3,
    marginBottom: 10,
  },
});
export default CommentCard;
