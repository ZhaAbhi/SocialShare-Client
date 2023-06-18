import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {colors} from '../config/colors';
import loadingImage from '../assets/images/loadingImage.jpeg';
import CameraIcon from 'react-native-vector-icons/Entypo';
import {launchImageLibrary} from 'react-native-image-picker';

const PostContentScreen = ({navigation}) => {
  const [imageUpload, setImageUpload] = useState();
  const [textCount, setTextCount] = useState(0);

  const handleImageUpload = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    if (result) {
      setImageUpload(result);
    }
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 30 : 0}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.closeX}>X</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.postButton}>
                <Text style={styles.postButtonText}>Post</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={styles.postContentContainer}>
              <View style={styles.postLabel}>
                <Image source={loadingImage} style={styles.userImage} />
                <View style={styles.publicTextContainer}>
                  <Text style={styles.publicText}>Public</Text>
                </View>
              </View>
              <View style={styles.textInputContainer}>
                <TextInput
                  onChangeText={text => setTextCount(text.length)}
                  autoFocus={true}
                  textAlignVertical="Top"
                  multiline={true}
                  maxLength={300}
                  style={styles.textInput}
                />
              </View>
            </View>
          </View>
          <View style={styles.footerContainer}>
            <View style={styles.footerInner}>
              <TouchableOpacity
                onPress={handleImageUpload}
                style={styles.selectImage}>
                <CameraIcon name="camera" size={50} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setImageUpload(null)}
                style={styles.uploadedImageContainer}>
                {imageUpload && (
                  <View>
                    <Image
                      source={{uri: imageUpload.assets[0].uri}}
                      style={styles.uploadedImage}
                    />
                    <Pressable
                      onPress={() => setImageUpload(null)}
                      style={styles.cancelUploadedImage}>
                      <Text style={styles.cancel}>X</Text>
                    </Pressable>
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.textCountBox,
                {
                  borderColor: textCount == 300 ? 'red' : colors.primary,
                },
              ]}>
              <Text style={{color: textCount == 300 ? 'red' : colors.primary}}>
                {textCount}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeX: {
    fontSize: 17,
  },
  postButton: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  postButtonText: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Poppins-semiBold',
  },

  horizontalLine: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 7,
  },

  postContentContainer: {
    marginTop: 20,
  },
  postLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  publicTextContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: colors.primary,
    marginLeft: 5,
    borderRadius: 5,
  },
  publicText: {
    color: '#fff',
    fontFamily: 'Poppins-semiBold',
  },
  textInputContainer: {
    marginTop: 10,
    marginLeft: 15,
  },
  textInput: {
    padding: 5,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerInner: {
    flexDirection: 'row',
  },
  selectImage: {
    height: 80,
    width: 80,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadedImageContainer: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  uploadedImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    position: 'absolute',
    resizeMode: 'cover',
  },
  cancelUploadedImage: {
    backgroundColor: 'black',
    position: 'absolute',
    right: -5,
    top: -10,
    padding: 3,
    borderRadius: 20,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancel: {
    fontWeight: 'bold',
    color: '#fff',
  },
  textCountBox: {
    height: 35,
    width: 35,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
});

export default PostContentScreen;
