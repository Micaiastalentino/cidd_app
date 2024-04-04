import { Text, StyleSheet, View, Pressable, TouchableOpacity, ActivityIndicator, Modal, Alert } from "react-native";
import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding } from "../GlobalStyles";
import { selecionarImagem, convertImageToBase64 } from "../components/ImagePicker/ImagePicker"; //Componente
import { Camera } from 'expo-camera';
import { Image } from "expo-image";
import axios from 'axios';
import CustomModal from "../components/ViewDicas/ViewDicas";
import PERFIL from "./PERFIL";

//Função carregamento;
const LoadingModal = ({ visible }) => (
  <Modal transparent visible={visible}>
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="black" />
      <Text>Diagnosticando...</Text>
    </View>
  </Modal>
);

const CAMERA = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento
  const [modalVisible, setModalVisible] = useState(false);

  // Camera
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null); // Adicionando estado para armazenar a imagem em base64
  const [respostaAPI, setRespostaAPI] = useState(null);

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

  if (hasPermission === null) {
    // Se ainda não foi solicitada a permissão, aguarde...
    return <View />;
  }
  if (hasPermission === false) {
    // Se a permissão foi negada, mostre uma mensagem.
    return <Text>Sem acesso à câmera</Text>;
  }

  // Função para mostrar a tela de carregamento
  const showLoading = () => {
    setIsLoading(true);
  };

  // Tirar uma foto
  const takePicture = async () => {
    if (cameraRef) {
      const image = await cameraRef.takePictureAsync({ quality: 1 }); //QUALITY - RESOLUÇÃO
      setCapturedImage(image.uri);
      console.log('URI da imagem tirada foto: ', capturedImage);
      try {
        const img_cam_base64 = await convertImageToBase64(image.uri); //Função Converter ImagemCam para Base64
        if (img_cam_base64) {
          setImageBase64(img_cam_base64); // Atualiza o estado da imagem em base64;
          await chamarAPI(); // Chama a API
          // O código abaixo será executado apenas se a chamada da API for bem-sucedida;
          //navigation.navigate('DIAGSAUDAVEL_TST', { capturedImage: image.uri, respostaAPI });
        }
      } catch (error) {
        console.error('Erro ao converter imagem:', error);
      }
    }
  };

  // Selecionar Foto;
  const selecionarImagemHandler = async () => {
    try {
      const img_armaz = await selecionarImagem(); // Função SelecionarImagem de ChamadaAPI;
      console.log('Img selecionada - CAMERA: ', img_armaz);
      setCapturedImage(img_armaz);

      // Condição (Selecionar Imagem);
      if (img_armaz) {
        const img_armaz_base64 = await convertImageToBase64(img_armaz);
        setImageBase64(img_armaz_base64); // Atualiza o estado da imagem em base64;
        showLoading(); // Mostra a tela de carregamento;
        await chamarAPI(); // Chama a API;
        //navigation.navigate('DIAGSAUDAVEL_TST', { capturedImage: img_armaz, respostaAPI }); // Navega para outro componente;
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
  return (
    <View style={styles.container}>
      {/*Exibe a Câmera*/}
      <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={(ref) => setCameraRef(ref)}/>

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
  //CAMERA
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
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

  camera: {
    flex: 0.8,
    width: "100%",
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

  //BARRA MENU
  barramenu: {
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingVertical: 10,
    justifyContent: 'space-around',
    height: '10%',
    width: "100%",
    position: 'absolute', // Alterado para 'absolute'
    bottom: 30,
    left: 0,
    right: 0,
    
    /*top: "85%",
    left: "4.5%",
    height: 60,
    minHeight: 60,
    bottom: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",*/
  },
});

export default CAMERA;