import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import BackIcon from 'react-native-vector-icons/Ionicons';
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../utils/colors';
import ProfileTopTabNavigation from '../navigation/ProfileTopTabNavigation';
import LocationIcon from 'react-native-vector-icons/Entypo';
import CalenderIcon from 'react-native-vector-icons/AntDesign';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <View>
        <Image source={loadingImage} style={{height: 100}} />
        <View style={{position: 'absolute', top: 25, padding: 10}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon name="arrow-back" size={25} color={colors.eelightgray} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{top: -25, marginLeft: 10}}>
            <Image
              source={loadingImage}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                borderWidth: 2,
                borderColor: colors.eelightgray,
              }}
            />
            <View>
              <View>
                <Text
                  style={{
                    color: colors.black,
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}>
                  Abhishek Jha
                </Text>
                <Text style={{color: colors.darkgray, fontSize: 15}}>
                  @Abhishek
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              top: -30,

              flexDirection: 'row',
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{marginRight: 30}}>
              <TouchableOpacity activeOpacity={0.8}>
                <MessageIcon
                  name="message-text"
                  size={25}
                  color={colors.blue}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: 100,
                height: 23,
                backgroundColor: colors.black,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: colors.eelightgray,

                  fontWeight: 'bold',
                }}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{top: -25, paddingLeft: 10}}>
          <Text style={{color: colors.black, fontSize: 15, marginTop: 10}}>
            Software engineer with eager to learn new technologies
          </Text>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <LocationIcon
                name="location-pin"
                size={18}
                color={colors.darkgray}
              />
              <Text style={{marginLeft: 5, color: colors.darkgray}}>Nepal</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CalenderIcon name="calendar" size={16} color={colors.darkgray} />
              <Text style={{marginLeft: 5, color: colors.darkgray}}>
                Joined on August 2023
              </Text>
            </View>
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Text style={{marginRight: 5, fontWeight: 'bold'}}>143</Text>
              <Text style={{color: colors.darkgray}}>Followings</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginRight: 5, fontWeight: 'bold'}}>11</Text>
              <Text style={{color: colors.darkgray}}>Followers</Text>
            </View>
          </View>
        </View>

        {/* Horizontal line */}
        <View
          style={{
            width: '100%',
            borderWidth: 0.5,
            borderColor: colors.lightgray,
          }}></View>
        {/* Main body */}
      </View>
      <ProfileTopTabNavigation />
    </View>
  );
};

export default ProfileScreen;
