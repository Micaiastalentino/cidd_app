import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Color } from "../../GlobalStyles";

const ViewImage = ({ capturedImage }) => {
  return (
    <View>
      {/* Exibindo a imagem usando a URI passada como propriedade */}
      <Image style={style.img} source={{ uri: capturedImage }} testID="image-component"/>
    </View>
  );
};
const style = StyleSheet.create ({
  img: {
    width: 270,
    height: 320,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Color.colorDarkgray,
  },
});

export default ViewImage;