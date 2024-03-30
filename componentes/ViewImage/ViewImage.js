import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Color } from "../../GlobalStyles";

const ViewImage = ({ capturedImage }) => {
  return (
    <View>
      {/* Exibindo a imagem usando a URI passada como propriedade */}
      <TouchableOpacity>
        <Image style={style.img} source={{ uri: capturedImage }} testID="image-component"/>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create ({
  img: {
    width: 270,
    height: 320,
    borderColor: Color.colorDarkgray,
    borderWidth: 1,
    borderRadius: 15,
  },
});

export default ViewImage;