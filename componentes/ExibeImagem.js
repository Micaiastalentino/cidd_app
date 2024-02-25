import { View, Image, StyleSheet } from 'react-native';

const ExibeImagem = ({ capturedImage }) => {

  return (
    <View>
      {/* Exibindo a imagem usando a URI passada como propriedade */}
      <Image style={style.img}
        source={{ uri: capturedImage }}
      />
    </View>
  );
};

const style = StyleSheet.create ({
  img: {
    position: 'absolute',
    width: 270,
    height: 320,
    left: 20,
    zIndex: 0,
    borderColor: 'black',
    borderWidth: 8,
    borderRadius: 15,
  },
});

export default ExibeImagem;
