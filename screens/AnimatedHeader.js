import React, {useRef} from 'react';
import {View, Text, ScrollView, Image, Animated} from 'react-native';
// import Animated from 'react-native-reanimated';

const images = [
  {id: 1, uri: require('../assets/images/loadingImage.jpeg')},
  {id: 2, uri: require('../assets/images/loadingImage.jpeg')},
  {id: 3, uri: require('../assets/images/loadingImage.jpeg')},
];

const HEADER_HEIGHT = 70;

const AnimatedHeader = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampScrollY = new Animated.diffClamp(scrollY, 0, HEADER_HEIGHT);
  const headerY = diffClampScrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });
  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          left: 0,
          right: 0,
          top: 0,
          position: 'absolute',
          backgroundColor: 'grey',
          height: HEADER_HEIGHT,
          zIndex: 1000,
          elevation: 1000,
          transform: [{translateY: headerY}],
        }}
      />
      <Animated.ScrollView
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}>
        {images.map(image => (
          <View key={image.id} style={{height: 400, margin: 20}}>
            <Image
              source={image.uri}
              style={{flex: 1, height: null, width: null}}
            />
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};
export default AnimatedHeader;
