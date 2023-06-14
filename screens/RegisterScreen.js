import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Alert,
  Button,
} from 'react-native';
import UnAuthenticatedHeader from '../components/UnAuthenticatedHeader';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import {colors} from '../config/colors';
import {register} from '../config/api';
import axios from 'axios';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [errorUsername, setErrorUsername] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmedPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  const checkEmailValidity = emailString => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(emailString);
  };

  const handleSubmit = async () => {
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();
    if (
      trimmedUsername === '' ||
      trimmedEmail === '' ||
      trimmedPassword === '' ||
      trimmedConfirmPassword === ''
    ) {
      Alert.alert('All fields are required!');
      return;
    }

    if (trimmedUsername.includes(' ')) {
      setErrorUsername('Spaces are not allowed in username!');
      return;
    }
    if (!checkEmailValidity(trimmedEmail)) {
      setErrorEmail('Invalid email type!');
      return;
    }

    if (trimmedPassword !== trimmedConfirmPassword) {
      setErrorConfirmPassword("Password didn't matched!");
      return;
    }

    const userData = {
      username: trimmedUsername,
      email: trimmedEmail,
      password: trimmedPassword,
    };
    try {
      await axios({
        url: register,
        method: 'post',
        data: userData,
      }).then(res => {
        if (res.status == 201) {
          Alert.alert(
            'Congratulation, registered successfully!',
            'Please login to continue',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => navigation.navigate('Login')},
            ],
          );
        }
      });
    } catch (error) {
      if (error.response?.data?.error) {
        return Alert.alert(error.response.data.error);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={{flex: 1}}>
            <UnAuthenticatedHeader
              greetText="Register now"
              greetDes="Become the part of thriving community!"
            />
            <View style={{padding: 24}}>
              <AppTextInput
                placeholder="Username"
                value={username}
                onChangeText={text => {
                  setUsername(text), setErrorUsername('');
                }}
                error={errorUsername}
              />
              <AppTextInput
                placeholder="Email"
                value={email}
                onChangeText={text => {
                  setEmail(text), setErrorEmail('');
                }}
                error={errorEmail}
              />
              <AppTextInput
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <AppTextInput
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={text => {
                  setConfirmedPassword(text), setErrorConfirmPassword('');
                }}
                error={errorConfirmPassword}
              />
              <AppButton title="Register" onPress={handleSubmit} />
            </View>
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  footerText: {
    marginRight: 5,
    fontFamily: 'Poppins-Light',
    fontSize: 15,
    color: colors.secondary,
  },
  loginText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: colors.secondary,
  },
});

export default RegisterScreen;
