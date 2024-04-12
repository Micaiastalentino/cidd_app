import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Pressable, TouchableOpacity, ActivityIndicator, Modal, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding } from "../GlobalStyles";
import { MaterialIcons } from '@expo/vector-icons';
import { selecionarImagem, convertImageToBase64 } from "../components/ImagePicker/ImagePicker"; //Componente
import CustomModal from "../components/ViewDicas/ViewDicas";
import { Camera } from 'expo-camera';
import { Image } from "expo-image";
import axios from 'axios';

//Função carregamento;
const LoadingModal = ({ visible }) => (
  <Modal transparent visible={visible}>
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="black" />
      <Text>Diagnosticando...</Text>
    </View>
  </Modal>
);

//Componente Câmera;
const CAMERA = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento;
  const [modalVisible, setModalVisible] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null); // Adicionando estado para armazenar a imagem em base64
  const [respostaAPI, setRespostaAPI] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);

  //Verifica e navega para DIAGSAUDAVEL toda vez que repostaAPI é atualizada;
  useEffect(() => {
    console.log("API atualizada:", respostaAPI);
    if (respostaAPI !== null) {
      navigation.navigate('DIAGSAUDAVEL_TST', { capturedImage, respostaAPI });
    }
  }, [respostaAPI]); // Execute sempre que respostaAPI for atualizado;

  // Verificar as permissões da câmera ao carregar o componente;
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Se ainda não foi solicitada a permissão, aguarde...
  if (hasPermission === null) {
    return <View />;
  }
  // Se a permissão foi negada, mostre uma mensagem.
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  // Função para mostrar a tela de carregamento
  const showLoading = () => {
    setIsLoading(true);
  };

  // Tirar uma foto;
  const takePicture = async () => {
    if (cameraRef) {
      const image = await cameraRef.takePictureAsync({ quality: 1 }); //QUALITY - RESOLUÇÃO;
      setCapturedImage(image.uri);
      console.log('URI da imagem tirada foto: ', capturedImage);
      try {
        const img_cam_base64 = await convertImageToBase64(image.uri); //Função Converter ImagemCam para Base64;
        if (img_cam_base64) {
          setImageBase64(img_cam_base64); // Atualiza o estado da imagem em base64;
          await chamarAPI(); // Chama a API;
        }
      } catch (error) {
        console.error('Erro ao converter imagem:', error);
      }
    }
  };

  // Selecionar Foto;
  const selecionarImagemHandler = async () => {
    try {
      const img_armaz = await selecionarImagem(); // Componente SelecionarImagem;
      console.log('Img selecionada - CAMERA: ', img_armaz);
      setCapturedImage(img_armaz);

      // Condição (Selecionar Imagem);
      if (img_armaz) {
        const img_armaz_base64 = await convertImageToBase64(img_armaz);
        setImageBase64(img_armaz_base64); // Atualiza o estado da imagem em base64;
        showLoading(); // Mostra a tela de carregamento;
        await chamarAPI(); // Chama a API;
      } else {
        Alert.alert('Nenhuma imagem selecionada', 'Por favor, selecione uma imagem.'); // Alerta de seleção de imagem;
      }
    } catch (error) {
      console.error('Erro ao selecionar imagem:', error);
    }
  };
  
  //Envia para API a imagem em Base64;
  chamarAPI = async () => {
    try {
      if (!imageBase64) {
        console.log('Selecione uma imagem antes de chamar a API');
        return;
      }
      const config = {
        headers: {
          'Content-Type': 'text/plain',
        },
      };
      //console.log(imageBase64);
      const res = await axios.post('http://192.168.1.105:5000/predict', imageBase64, config); //Endereço API;
      setRespostaAPI(res.data.predictions); //Atualiza o estado da resposta enviada pela API;

    } catch (error) {
      if (error.response) {
        console.error('Erro de resposta da API:', error.response.data);
        console.error('Status do erro:', error.response.status);
      } else if (error.request) {
        console.error('Sem resposta da API:', error.request);
      } else {
        console.error('Erro durante a configuração da requisição:', error.message);
      }
      console.error('Erro geral ao chamar a API:', error);
    }
  };

  //Alternador Tipo de Camera;
  const toggleCameraType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };
  //Alternador Modo Flash;
  const toggleFlashMode = () => {
    setFlashMode(
      flashMode === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    );
  };

  //Inicialização Camera;
  const onCameraReady = () => {
    setIsCameraReady(true);
  };
  
  return (
    <View style={styles.container}>

      <Camera 
        style={styles.camera}
        type={type}
        flashMode={flashMode}
        ref={(ref) => setCameraRef(ref)}
        onCameraReady={onCameraReady}
      >
        <View style={styles.cameraButtonContainer}>
          <TouchableOpacity style={styles.cameraButton} onPress={toggleFlashMode}>
            <MaterialIcons name={flashMode === Camera.Constants.FlashMode.off ? 'flash-off' : 'flash-on'} size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cameraButton} onPress={toggleCameraType}>
            <MaterialIcons name="flip-camera-ios" size={36} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={styles.barramenu}>
        {/*Botão Selecionar Imagem*/}
        <TouchableOpacity style={[styles.circulo]}
          onPress={async () => {
            try {
              await selecionarImagemHandler();
            } catch (error) {
              console.error('Erro ao processar solicitação:', error);
            } finally {
              setIsLoading(false); // Oculta a tela de carregamento, independentemente do resultado da chamada da API
            }
          }}>
          <Text style={styles.tirarfoto}>Fotos</Text>
        </TouchableOpacity>

        {/*Botão Tirar Foto*/}
        <TouchableOpacity style={styles.botaotirarfoto}
          onPress={async () => {
            showLoading(); // Mostra a tela de carregamento
            try {
              await takePicture(); // Tira a foto
            } catch (error) {
              console.error('Erro ao processar solicitação:', error);
            } finally {
              setIsLoading(false); // Oculta a tela de carregamento, independentemente do resultado da chamada da API
            }
          }}>
          <Image
            style={styles.botaoicontirarfoto}
            contentFit="cover"
            source={require("../assets/images/bototirarfoto.png")}
          />
        </TouchableOpacity>

        {/*Botão Dicas Capt*/}
        <TouchableOpacity style={styles.dicascaptura} onPress={() => setModalVisible(true)}>
          <Image
            style={styles.iconcaptura}
            contentFit="cover"
            source={require("../assets/images/firrbulb.png")}
          />
          <Text style={[styles.TextdicasDeCaptura]}>
            Dicas de Captura
          </Text>
          <CustomModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            modalText="Entendido!"
          />
        </TouchableOpacity>
      </View>

      {/* Tela de carregamento */}
      <LoadingModal visible={isLoading} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },

  camera: {
    flex: 0.75,
    width: "100%",
  },

  cameraButtonContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10
  },

  cameraButton: {
    backgroundColor: 'transparent',
    marginHorizontal: 5
  },

  //BARRA MENU
  barramenu: {
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    justifyContent: 'space-around',
    height: 180,
    width: "100%",
    position: 'absolute', // Alterado para 'absolute'
    bottom: 0,
    left: 0,
    right: 0,
  },

  modal:{
    margin: 10,
  },

  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tirarfoto:{
    marginTop: 2,
  },


  botaoicontirarfoto: {
    height: "100%",
    width: "100%",
  },
  
  circulo: {
    borderRadius: Border.br_31xl,
    borderStyle: "solid",
    borderColor: Color.colorSienna,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: Padding.p_12xl,
    paddingVertical: 5,
    overflow: "hidden",
    flexDirection: "row",
  },
  
  botaotirarfoto: {
    width: 74,
    height: 74,
  },
  
  iconcaptura: {
    width: 34,
    height: 33,
    overflow: "hidden",
  },

  TextdicasDeCaptura: {
    textAlign: "center",
    display: "flex",
    width: 130,
    justifyContent: "center",
    alignItems: "center",
  },

  dicascaptura: {
    width: 97,
    alignItems: "center",
  },
});

export default CAMERA;