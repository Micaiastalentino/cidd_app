import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

//CÓDIGO DAS CONFIGURAÇÕES DA CÂMERA;
const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  // Verificar as permissões da câmera ao carregar o componente;
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Tirar uma foto;
  const takePicture = async () => {
    if (cameraRef) {
      const image = await cameraRef.takePictureAsync({ quality: 1 }); //QUALITY - RESOLUÇÃO
      setCapturedImage(image.uri);
      console.log(image.uri) //teste
    }
  };

  if (hasPermission === null) {
    // Se ainda não foi solicitada a permissão, aguarde...
    return <View />;
  }
  if (hasPermission === false) {
    // Se a permissão foi negada, mostre uma mensagem.
    return <Text>Sem acesso à câmera</Text>;
  }

  return (
    <View style={styles.container}>
      {capturedImage ? ( //Exibe a captura da imagem se for tirada;

        <View style={styles.container}>
          <Text style={styles.Text}>Imagem Capturada</Text>
          <Image source={{ uri: capturedImage }} style={styles.image} />
        </View>

      ) : ( //Exibe a câmera até ser feita uma captura;

        <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={(ref) => setCameraRef(ref)} />
        
      )}

      {/*Exibe o botão até ser feita uma captura;*/}
      {!capturedImage && (

        <TouchableOpacity onPress={takePicture}>
            <Ionicons name="radio-button-on-sharp" size={80} color="black" />
        </TouchableOpacity>

      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: 400,
    height: 600,
    resizeMode: 'contain',
  },
  Text: {
    fontSize: 18, 
    marginTop: 0,
    color: 'red',
  }
});

export default CameraScreen;