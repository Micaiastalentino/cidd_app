// SplashScreen.js
import React from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';

const SplashScreen = () => {
  const rotateValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2100,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateValue]);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['40deg', '0deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/images/app-logo-init.png')}
        style={[styles.image, { transform: [{ rotate }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default SplashScreen;