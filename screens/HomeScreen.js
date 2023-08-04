import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Avatar from '../assets/images/loadingImage.jpeg';
import {colors} from '../utils/colors';
import SwitchMode from 'react-native-vector-icons/Entypo';
import PostCard from '../components/PostCard';
import PostCircleButton from '../components/PostCircleButton';
import {retrieveToken} from '../utils/store';
import axios from 'axios';
import {api} from '../config/api';

const HomeScreen = ({navigation}) => {
  const [posts, setPosts] = useState();

  const fetchPost = async () => {
    const token = await retrieveToken();
    await axios({
      method: 'get',
      url: api.getPosts,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res => {
      setPosts(res.data);
    });
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.openDrawer()}>
          <Image source={Avatar} style={styles.avatar} />
        </TouchableOpacity>
        <Text style={styles.title}>Social Share</Text>
        <TouchableOpacity>
          <SwitchMode name="light-up" color={colors.black} size={20} />
        </TouchableOpacity>
      </View>
      {posts && (
        <FlatList
          data={posts}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <PostCard
              post={item}
              onPress={() => navigation.navigate('PostDetail')}
            />
          )}
          bounces={false}
        />
      )}

      {/* Post button */}
      <PostCircleButton onPress={() => navigation.navigate('PostContent')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.elightgray,
    justifyContent: 'space-between',
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
    color: colors.blue,
  },
});

export default HomeScreen;
