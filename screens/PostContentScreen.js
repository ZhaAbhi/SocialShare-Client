import React, {useState} from 'react';
import {
  Alert,
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
import CameraIcon from 'react-native-vector-icons/Entypo';
import {launchImageLibrary} from 'react-native-image-picker';

const PostContentScreen = ({navigation}) => {
  const [textContent, setTextContent] = useState('');
  const [imagePicked, setImagePicked] = useState(null);

  const pickImage = async () => {
    await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    })
      .then(res => {
        if (res.didCancel) {
          return;
        }
        setImagePicked(res['assets'][0]);
      })
      .catch(error => {
        return;
      });
  };

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
            <TouchableOpacity
              style={[
                styles.postButton,
                {
                  backgroundColor:
                    textContent.trim() === '' && !imagePicked
                      ? colors.dimBlue
                      : colors.blue,
                },
              ]}
              disabled={textContent.trim() === '' && !imagePicked}>
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
              maxLength={200}
              value={textContent}
              onChangeText={text => setTextContent(text)}
              style={styles.textInput}
            />
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.footer}>
        <View style={styles.uploadImageContainer}>
          <TouchableOpacity
            style={styles.imagePicker}
            activeOpacity={0.8}
            onPress={pickImage}>
            <CameraIcon name="camera" size={45} color={colors.eelightgray} />
          </TouchableOpacity>
          {imagePicked && (
            <View style={styles.uploadImage}>
              <Image
                source={{uri: imagePicked.uri}}
                style={styles.pickedImage}
              />
              <TouchableOpacity
                onPress={() => setImagePicked(null)}
                activeOpacity={1}
                style={styles.crossContainer}>
                <Text style={styles.cross}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View
          style={[
            styles.count,
            {borderColor: textContent.length === 200 ? 'red' : colors.blue},
          ]}>
          <Text
            style={{color: textContent.length === 200 ? 'red' : colors.black}}>
            {textContent.length}
          </Text>
        </View>
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  uploadImageContainer: {
    flexDirection: 'row',
  },
  imagePicker: {
    height: 90,
    width: 90,
    backgroundColor: colors.darkgray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10,
  },
  uploadImage: {
    marginLeft: 10,
  },
  pickedImage: {
    height: 90,
    width: 90,
  },
  crossContainer: {
    position: 'absolute',
    right: -3,
    top: -8,
    height: 20,
    width: 20,
    borderRadius: 10,
    opacity: 0.8,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cross: {
    color: colors.white,
    fontWeight: 'bold',
  },
  count: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostContentScreen;
