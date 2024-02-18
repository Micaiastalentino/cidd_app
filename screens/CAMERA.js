import React, { useRef, useState, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ActivityIndicator} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding } from "../GlobalStyles";
import { Camera } from 'expo-camera';
import {selecionarImagem, convertImageToBase64} from "../api/ChamadaAPI";
import axios from 'axios';



const CAMERA = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento

  // Camera
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null); // Adicionando estado para armazenar a imagem em base64

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

  // Tirar uma foto;
  const takePicture = async () => {
    if (cameraRef) {

      setIsLoading(true); // Ativar o carregamento ao tirar a foto

      const image = await cameraRef.takePictureAsync({ quality: 1 }); //QUALITY - RESOLUÇÃO
      setCapturedImage(image.uri);

      try {
        const img_cam_base64 = await convertImageToBase64(image.uri); //Função Converter Imagem Cam para Base64
        if (img_cam_base64) {
          setImageBase64(img_cam_base64); // Atualiza o estado da imagem em base64

          setIsLoading(false); // Desativar o carregamento após obter a imagem

        }
      } catch (error) {

        setIsLoading(false); // Se houver erro, garantir que o carregamento seja desativado

        console.error('Erro ao converter imagem:', error);
      }
    }
  };

  //Selecionar Foto;
  const selecionarImagemHandler = async () => {
    try {

        setIsLoading(true); // Ativar o carregamento ao selecionar a imagem
        
        const img_armaz_base64 = await selecionarImagem(); //Função SelecionarImagem Convertida de ChamadaAPI;
        if (img_armaz_base64) {
          setImageBase64(img_armaz_base64); // Atualiza o estado da imagem em base64

          setIsLoading(false); // Desativar o carregamento após obter a imagem

        }
    } catch (error) {

        setIsLoading(false); // Se houver erro, garantir que o carregamento seja desativado

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

        console.log(imageBase64);

        const res = await axios.post('http://10.0.0.153:5000/predict', imageBase64, config); //Endereço API;
        console.log(res.data);

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
        <TouchableOpacity onPress={selecionarImagemHandler} style={[styles.circulo]}>
          <Text style={styles.tirarfoto}>Fotos</Text>
        </TouchableOpacity>

        {/*Botão Tirar Foto*/}
        <TouchableOpacity style={styles.botaotirarfoto}
          onPress={() => {
            takePicture();
            this.chamarAPI();
           }}>
          <Image
            style={styles.botaoicontirarfoto}
            contentFit="cover"
            source={require("../assets/bototirarfoto.png")}
          />
        </TouchableOpacity>

        {/*Botão Dicas Capt*/}
        <TouchableOpacity style={styles.dicascaptura}>
          <Image
            style={styles.iconcaptura}
            contentFit="cover"
            source={require("../assets/firrbulb.png")}
          />
          <Text style={[styles.TextdicasDeCaptura]}>
            Dicas de Captura
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tela de carregamento */}
      {isLoading && (
        <View style={styles.loadingContainer}>
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#FFFFFF" />
          </View>
        </View>
      )}
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
  
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loading: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 10,
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
    marginLeft: 37,
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
    marginLeft: 45,
    alignItems: "center",
  },

  //BARRA MENU
  barramenu: {
    top: 600,
    left: 23,
    height: 60,
    minHeight: 60,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
});

export default CAMERA;