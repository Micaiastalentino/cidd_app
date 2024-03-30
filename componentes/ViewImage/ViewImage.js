import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Color } from '../../GlobalStyles';

const ViewImage = ({ capturedImage }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: capturedImage }} testID="image-component" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 270,
    height: 320,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Color.colorDarkgray, // Use Color.colorDarkgray do seu estilo global
  },
});

export default ViewImage;