import React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {colors} from '../utils/colors';
import loadingImage from '../assets/images/loadingImage.jpeg';

const PostContentScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.main}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.close}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButton}>
              <Text style={styles.postText}>POST</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalLine}></View>
          <View style={styles.avatarPublic}>
            <Image source={loadingImage} style={styles.avatar} />
            <View style={styles.public}>
              <Text style={styles.publicText}>Public</Text>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TextInput
              placeholder="What's happening.."
              placeholderTextColor={colors.lightgray}
              multiline
              style={styles.textInput}
            />
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
      <View>
        <Text>Hello there</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    marginTop: '8%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  horizontalLine: {
    borderWidth: 0.5,
    borderColor: colors.darkgray,
  },
  close: {
    fontSize: 20,
    color: colors.black,
  },
  postButton: {
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
  },
  postText: {
    color: colors.eelightgray,
    fontSize: 15,
    fontWeight: 'bold',
  },
  avatarPublic: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  public: {
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    padding: 2,
    borderRadius: 10,
  },
  publicText: {
    color: colors.eelightgray,
    fontWeight: 'bold',
  },
  textInput: {
    height: 200,
    paddingLeft: 20,
    color: colors.black,
  },
});

export default PostContentScreen;
