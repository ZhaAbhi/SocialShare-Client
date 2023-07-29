import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import PostContentHeader from '../components/PostContentHeader';
import PostContentFooter from '../components/PostContentFooter';
import Avatar from '../assets/images/loadingImage.jpeg';
import {colors} from '../utils/colors';

const PostContentScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView>
        <PostContentHeader onPressClose={() => navigation.goBack()} />
      </SafeAreaView>
      <View style={styles.inner}>
        <View style={styles.contentContainer}>
          <View style={styles.inputAvatar}>
            <Image source={Avatar} style={styles.avatar} />
            <View style={styles.publicTextContainer}>
              <Text style={styles.publicText}>Public</Text>
            </View>
          </View>
          <View>
            <TextInput
              style={styles.input}
              autoFocus
              multiline
              placeholder="What's happening..."
              placeholderTextColor={colors.darkgray}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <PostContentFooter />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    padding: 10,
  },
  inputAvatar: {
    flexDirection: 'row',
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  publicTextContainer: {
    marginLeft: 5,
    height: 20,
    backgroundColor: colors.blue,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  publicText: {
    color: colors.eelightgray,
    fontWeight: 'bold',
  },
  input: {
    paddingLeft: 30,
  },
  footer: {
    padding: 20,
  },
});
export default PostContentScreen;
