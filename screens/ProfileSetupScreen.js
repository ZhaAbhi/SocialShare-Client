import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CameraIcon from 'react-native-vector-icons/AntDesign';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import BackIcon from 'react-native-vector-icons/Ionicons';

const ProfileSetupScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
            <View>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{position: 'absolute', padding: 10}}>
                <BackIcon name="arrow-back-circle" size={30} color="darkblue" />
              </TouchableOpacity>
              <Text style={styles.heading}>
                Setup Your profile by entering {'\n'} additional information
              </Text>
              {/* Image Upload */}
              <View style={styles.imageUploadContainer}>
                <TouchableOpacity style={styles.uploadImage}>
                  {/* <Image
          source={require('../assets/images/loadingImage.jpeg')}
          style={styles.image}
        /> */}
                  <CameraIcon
                    name="camera"
                    size={50}
                    color="grey"
                    style={{alignSelf: 'center'}}
                  />
                </TouchableOpacity>
                <Text style={styles.uploadImageText}>
                  Change Profile Picture
                </Text>
              </View>
              <View style={{padding: 10}}>
                <Text style={{marginLeft: 'auto'}}>*</Text>
                <AppTextInput
                  placeholder="Enter your username"
                  style={{marginBottom: 20}}
                />
                <AppTextInput
                  placeholder="Write something about yourself"
                  style={{height: 100}}
                  multiline={true}
                />
                <View style={{marginTop: 25, marginBottom: '5%'}}>
                  <AppButton title="Complete Registration" />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 20,
    marginTop: 20,
    color: 'darkblue',
  },
  imageUploadContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadImage: {
    height: 100,
    width: 100,
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: 'center',
    borderColor: '#f1f4ff',
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  uploadImageText: {
    marginTop: 10,
    marginBottom: '10%',
    fontFamily: 'Poppins-SemiBold',
    color: 'darkblue',
  },
});

export default ProfileSetupScreen;
