import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';

const AppHeader = ({username, onPress}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greetContainer}>
        <TouchableOpacity onPress={onPress}>
          <Image source={loadingImage} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.greetText}>Hi, {username}!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
  greetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:5
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  greetText: {
    marginLeft: 5,
    color:'#000',
    fontFamily:'Poppins-SemiBold'
  },
});

export default AppHeader;
