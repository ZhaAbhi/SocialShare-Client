import React, {useContext} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import {colors} from '../utils/colors';
import VerifyIcon from 'react-native-vector-icons/MaterialIcons';
import BookmarkIcon from 'react-native-vector-icons/MaterialIcons';
import SettingIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {retrieve} from '../utils/asyncStore';
import UserContext from '../context/UserContext';

const CustomDrawerContent = () => {
  const navigation = useNavigation();
  const {user} = useContext(UserContext);

  const firstNameFromEmail = user && user.email.match(/^([^@]+)/)[1];
  const handleLogout = async () => {
    await AsyncStorage.removeItem('AccessToken').then(result => {
      console.log(result);
    });
  };
  return (
    <>
      {user && (
        <SafeAreaView style={{flex: 1}}>
          <View style={{paddingLeft: 10, marginTop: 5, paddingRight: 10}}>
            <Pressable
              onPress={() => navigation.navigate('ProfileScreen')}
              style={{justifyContent: 'center'}}>
              <Image
                source={loadingImage}
                style={{height: 60, width: 60, borderRadius: 30}}
              />
            </Pressable>

            <View style={{paddingLeft: 5, marginBottom: 10}}>
              <Text
                style={{
                  fontSize: 17,
                  marginVertical: 2,
                  color: colors.black,
                  fontWeight: 'bold',
                }}>
                {firstNameFromEmail}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: colors.darkgray,
                  fontWeight: '500',
                }}>
                @{user.username}
              </Text>
            </View>
            <View style={{flexDirection: 'row', paddingLeft: 5}}>
              <View style={{flexDirection: 'row', marginRight: 10}}>
                <Text
                  style={{
                    marginRight: 2,
                    fontWeight: 'bold',
                    color: colors.black,
                  }}>
                  {user.followings.length}
                </Text>
                <Text style={{color: colors.darkgray}}>Followings</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    marginRight: 2,
                    fontWeight: 'bold',
                    color: colors.black,
                  }}>
                  {user.followers.length}
                </Text>
                <Text style={{color: colors.darkgray}}>Followers</Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: colors.lightgray,
                marginTop: 10,
                marginBottom: 10,
              }}></View>
          </View>
          <View style={{paddingLeft: 10, marginTop: 10}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <VerifyIcon name="verified" size={22} color={colors.blue} />
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: 17,
                  fontWeight: '500',
                  color: colors.black,
                }}>
                Verify Account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <BookmarkIcon name="bookmark" size={22} color={colors.black} />
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: 17,
                  fontWeight: '500',
                  color: colors.black,
                }}>
                Bookmark
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <SettingIcon name="gear" size={22} color={colors.black} />
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: 17,
                  fontWeight: '500',
                  color: colors.black,
                }}>
                Settings and Privacy
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}

      <Text
        style={{alignSelf: 'center', marginBottom: 10, color: colors.black}}>
        Made with ❤️ Abhishek Jha{' '}
      </Text>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: colors.lightgray,
          marginTop: 5,
        }}></View>

      <TouchableOpacity
        onPress={handleLogout}
        style={{padding: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: colors.black}}>
          Log out
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomDrawerContent;
