import { View, Image } from 'react-native';

const ExibeImagem = ({ capturedImage }) => {
  return (
    <View>
      {/* Exibindo a imagem usando a URI passada como propriedade */}
      <Image
        source={{ uri: capturedImage }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default ExibeImagem;
