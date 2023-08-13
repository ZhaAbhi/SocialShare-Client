import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {colors} from '../utils/colors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AuthHeader from '../components/AuthHeader';
import axios from 'axios';
import {api} from '../config/api';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailFormatValidity = emailString => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(emailString);
  };

  const validateUserPayload = () => {
    if (!username.trim() || !email.trim() || !password || !confirmPassword) {
      return Alert.alert('All fields are required for registration!');
    }
    if (password !== confirmPassword) {
      return Alert.alert('Password did not matched!');
    }
    if (username.trim().includes(' ')) {
      return Alert.alert('Username should not contain any whitespaces!');
    }
    if (!emailFormatValidity(email)) {
      return Alert.alert('Invalid email address!');
    }
    return true;
  };

  const handleRegistration = async () => {
    const result = validateUserPayload();
    if (result) {
      await axios({
        method: 'post',
        url: api.register,
        data: {
          username,
          email,
          password,
        },
      })
        .then(res => {
          if (res.status === 201) {
            return Alert.alert(
              'Congratulations! You have been registered successfully!',
              'Please login to continue',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('cancel pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => navigation.navigate('Login')},
              ],
            );
          }
        })
        .catch(error => {
          return Alert.alert(error.response.data.error);
        });
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.main}>
        <AuthHeader
          greet="Create Account"
          subGreet="A platform to share and connect!"
        />
        <Text style={styles.registerText}>Register</Text>
        <View style={styles.input}>
          <AppTextInput
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <AppTextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <AppTextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <AppTextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>
        <View style={styles.footer}>
          <AppButton onPress={handleRegistration} title="Register" />
          <View style={styles.alreadyAccount}>
            <Text style={styles.alreadyAccountText}>
              Already have an account?
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.blue,
    flex: 1,
    padding: 10,
  },
  registerText: {
    marginTop: '20%',
    fontSize: 25,
    color: colors.eelightgray,
  },
  input: {
    marginTop: '5%',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  alreadyAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
  },
  alreadyAccountText: {
    color: colors.eelightgray,
    fontSize: 18,
  },
  login: {
    marginLeft: 5,
    color: colors.eelightgray,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default RegisterScreen;
