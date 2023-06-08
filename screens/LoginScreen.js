import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppButton from '../components/AppButton';
import {colors} from '../config/colors';
import SocialShareImage from '../assets/images/socialshare.png';
import Githublogo from '../assets/images/Githublogo.png';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <Image
          source={SocialShareImage}
          style={{height: 100, width: 200, borderRadius: 50}}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: 17,
            color: colors.secondary,
          }}>
          Please enter your login credentials
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Poppins-Light',
            fontSize: 17,
            color: colors.secondary,
          }}>
          to access your account
        </Text>
      </View>

      <View style={{padding: 10}}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="darkgrey"
          style={{
            height: 40,
            width: '100%',
            borderWidth: 1,
            borderColor: '#000',
            padding: 10,
            marginVertical: 20,
            borderRadius: 25,
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="darkgrey"
          style={{
            height: 40,
            width: '100%',
            borderWidth: 1,
            borderColor: '#000',
            padding: 10,
            borderRadius: 25,
          }}
        />
      </View>
      <AppButton
        title="Login"
        containerStyle={{backgroundColor: colors.tertiary, marginTop: 20}}
      />
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10, alignItems:'center'}}>
        <Text style={{color:colors.secondary, fontSize:15,fontFamily:'Poppins-Light'}}>Don't have an account?</Text>
        <TouchableOpacity style={{marginLeft:5}}>
        <Text style={{color:colors.secondary, fontSize:15, fontFamily:'Poppins-semiBold'}}>Register</Text>
        </TouchableOpacity>
        
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 30,
          alignItems: 'center',
        }}>
        <Text style={{fontFamily:'Poppins-Bold'}}>Continue with</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
            padding:3,
            marginLeft:5
          }}>
          <Image source={Githublogo} style={{height: 30, width: 40}} />
          <Text style={{fontWeight:'bold'}}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});
export default LoginScreen;
