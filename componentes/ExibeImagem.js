import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Color } from "../GlobalStyles";

const ExibeImagem = ({ capturedImage }) => {
  const handleImagePress = () => {
    // Lógica para lidar com a interação da imagem
    console.log('Imagem pressionada!');
  };

  return (
    <View>
      {/* Exibindo a imagem usando a URI passada como propriedade */}
      <TouchableOpacity onPress={handleImagePress}>
        <Image style={style.img} source={{ uri: capturedImage }}/>
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

export default ExibeImagem;
