import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10%',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              color: 'darkblue',
              fontSize: 28,
              fontWeight: 'bold',
            }}>
            Login here
          </Text>
          <View style={{marginTop: '5%'}}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                color: '#000',
                fontSize: 17,
              }}>
              Welcome back you've
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Poppins-SemiBold',
                color: '#000',
                fontSize: 17,
              }}>
              been missed!
            </Text>
          </View>
        </View>
        <View style={{padding: 20, marginTop: 30}}>
          <TextInput
            placeholder="Email"
            style={{
              height: 40,
              backgroundColor: '#f1f4ff',
              borderRadius: 8,
              marginBottom: 28,
              paddingLeft: 10,
            }}
          />
          <TextInput
            placeholder="Password"
            style={{
              height: 40,
              backgroundColor: '#f1f4ff',
              borderRadius: 8,
              paddingLeft: 10,
            }}
          />
          <Text
            style={{
              marginLeft: 'auto',
              marginTop: 35,
              fontFamily: 'Poppins-SemiBold',
              color: 'darkblue',
            }}>
            Forget your password?
          </Text>
          <View
            style={{
              shadowColor: 'darkblue',
              shadowOffset: {
                width: 0,
                height: 9,
              },
              shadowOpacity: 0.5,
              shadowRadius: 12.35,

              elevation: 19,
              backgroundColor: 'darkblue',
              padding: 13,
              borderRadius: 8,
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Poppins-SemiBold',
                fontSize: 15,
              }}>
              Sign in
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontFamily: 'Poppins-SemiBold', color: '#000'}}>
              Create a new account
            </Text>
            <Text
              style={{
                marginTop: 30,
                fontFamily: 'Poppins-SemiBold',
                color: 'darkblue',
              }}>
              or continue with
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
export default LoginScreen;
