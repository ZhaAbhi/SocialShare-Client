import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import UnAuthHeader from '../components/UnAuthHeader';
import {colors} from '../utils/colors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import axios from 'axios';
import {api} from '../config/api';

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function checkPasswordValidity() {
    if (password !== confirmPassword) {
      setLoading(false);
      return Alert.alert('Password did not matched!');
    }
  }

  const handleRegister = async () => {
    setLoading(true);
    checkPasswordValidity();
    const userData = {
      username: username.trim(),
      email: username.trim(),
      password: password,
    };
    try {
      await axios({
        method: 'post',
        url: api.register,
        data: userData,
      }).then(res => {
        if (res.status === 201) {
          setLoading(false);
          return Alert.alert(res.data.message, 'Please login to continue', [
            {text: 'OK', onPress: () => navigation.navigate('Login')},
          ]);
        }
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.inner} showsVerticalScrollIndicator={false}>
        <UnAuthHeader
          greet="Create Account!"
          subgreet="A platform to share and connect"
          info="Register"
        />
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
        <AppButton
          title="Register"
          style={styles.button}
          onPress={handleRegister}
          loading={loading}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footerText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  inner: {
    flex: 1,
  },
  button: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: colors.eelightgray,
    marginLeft: 5,
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
  },
});

export default RegisterScreen;
