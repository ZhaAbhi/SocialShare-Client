import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import loadingImage from '../assets/images/loadingImage.jpeg';
import UserContext from '../context/UserContext';

const AppHeader = () => {
  const {user} = useContext(UserContext);
  return (
    <View style={styles.container}>
      {user && (
        <View style={styles.greetContainer}>
          <TouchableOpacity>
            <Image source={loadingImage} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.greetText}>Hi, {user.username}!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  greetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  greetText: {
    marginLeft: 5,
  },
});

export default AppHeader;
