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
        <View style={{flex: 1, justifyContent: 'space-between', padding: 20}}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{fontSize: 17}}>X</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingTop: 2,
                  paddingBottom: 2,
                  backgroundColor: colors.primary,
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#fff',
                    fontFamily: 'Poppins-semiBold',
                  }}>
                  Post
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginTop: 7,
              }}></View>
            <View style={{marginTop: 20}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={loadingImage}
                  style={{height: 30, width: 30, borderRadius: 15}}
                />
                <View
                  style={{
                    paddingLeft: 5,
                    paddingRight: 5,
                    backgroundColor: colors.primary,
                    marginLeft: 5,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: '#fff', fontFamily: 'Poppins-semiBold'}}>
                    Public
                  </Text>
                </View>
              </View>
              <View style={{marginTop: 10, marginLeft: 15}}>
                <TextInput
                  onChangeText={text => setTextCount(text.length)}
                  autoFocus={true}
                  textAlignVertical="Top"
                  multiline={true}
                  maxLength={300}
                  style={{padding: 5}}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={handleImageUpload}
                style={{
                  height: 80,
                  width: 80,
                  backgroundColor: 'lightgrey',
                  borderRadius: 10,
                  marginRight: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CameraIcon name="camera" size={50} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setImageUpload(null)}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 10,
                }}>
                {imageUpload && (
                  <View>
                    <Image
                      source={{uri: imageUpload.assets[0].uri}}
                      style={{
                        height: 80,
                        width: 80,
                        borderRadius: 10,
                        position: 'absolute',
                        resizeMode: 'cover',
                      }}
                    />
                    <Pressable
                      onPress={() => setImageUpload(null)}
                      style={{
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
                      }}>
                      <Text style={{fontWeight: 'bold', color: '#fff'}}>X</Text>
                    </Pressable>
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 35,
                width: 35,
                borderWidth: 1,
                borderColor: textCount == 300 ? 'red' : colors.primary,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 18,
              }}>
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

export default PostContentScreen;
