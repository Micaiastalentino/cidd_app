import React, { useState, useRef, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ActivityIndicator, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding } from "../GlobalStyles";
import { selecionarImagem, convertImageToBase64 } from "../api/ChamadaAPI";
import ExibeImagem from "../componentes/ExibeImagem";
import { Camera } from 'expo-camera';
import axios from 'axios';


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

  // Camera
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null); // Adicionando estado para armazenar a imagem em base64
  const [respostaAPI, setRespostaAPI] = useState(null);

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

  // Tirar uma foto;
  const takePicture = async () => {
    if (cameraRef) {

      const image = await cameraRef.takePictureAsync({ quality: 1 }); //QUALITY - RESOLUÇÃO
      setCapturedImage(image.uri);

      try {
        const img_cam_base64 = await convertImageToBase64(image.uri); //Função Converter Imagem Cam para Base64
        if (img_cam_base64) {
          setImageBase64(img_cam_base64); // Atualiza o estado da imagem em base64
        }
        
      } catch (error) {

        console.error('Erro ao converter imagem:', error);
      }
    }
  };

  //Selecionar Foto;
  const selecionarImagemHandler = async () => {
    try {
        const img_armaz = await selecionarImagem(); //Função SelecionarImagem de ChamadaAPI;
        const img_armaz_base64 = await convertImageToBase64(img_armaz);
        if (img_armaz_base64) {
          setImageBase64(img_armaz_base64); // Atualiza o estado da imagem em base64
          //console.log(imageBase64)  //Verificar se está passando a base;
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
        const res = await axios.post('http://192.168.1.102:5000/predict', imageBase64, config); //Endereço API;
        setRespostaAPI(res.data); //Atualiza o estado da resposta enviada pela API;
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

  manipularDadosAPI = () => {
    try{
      if (respostaAPI){
        const previsao = respostaAPI.prediction;

        //Resultados filtrados por classe;
        saudavel = previsao[0][0];
        podridaoParda = previsao[0][1];
        brocaVagem = previsao[0][2];
        
        let maiorNumero;

        if ((saudavel > podridaoParda) && (saudavel > brocaVagem)){
          maiorNumero = saudavel.toFixed(2);
          console.log('O fruto apresenta ', maiorNumero * 100, '(%) de ser SAUDÁVEL.')
        } else if ((podridaoParda > saudavel) && (podridaoParda > brocaVagem)) {
          maiorNumero = podridaoParda.toFixed(2);
          console.log('O fruto apresenta ', maiorNumero * 100, '(%) de estar com PODRIDÃO PARDA.')
        } else {
          maiorNumero = brocaVagem.toFixed(2);;
          console.log('O fruto apresenta ', maiorNumero * 100, '(%) de estar com BROCA DA VAGEM.')
        }
      }
    }catch (error) {
      console.error('Erro de reposta da API:', error.respostaAPI);
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
              showLoading(); // Mostra a tela de carregamento
              await chamarAPI(); // Chama a API
              await manipularDadosAPI(); //Exibe o resultado
              // O código abaixo será executado apenas se a chamada da API for bem-sucedida
              //navigation.navigate('DIAGSAUDAVEL');
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
              await chamarAPI(); // Chama a API
              // O código abaixo será executado apenas se a chamada da API for bem-sucedida
              await manipularDadosAPI();
              //navigation.navigate('DIAGSAUDAVEL', {capturedImage});
            } catch (error) {
              console.error('Erro ao processar solicitação:', error);
            } finally {
              setIsLoading(false); // Oculta a tela de carregamento, independentemente do resultado da chamada da API
            }
          }}>
          <Image
            style={styles.botaoicontirarfoto}
            contentFit="cover"
            source={require("../assets/bototirarfoto.png")}
          />
        </TouchableOpacity>

        {/*Botão Dicas Capt*/}
        <TouchableOpacity onPress={manipularDadosAPI} style={styles.dicascaptura}>
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
    top: "85%",
    left: "4.5%",
    height: 60,
    minHeight: 60,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
});

export default CAMERA;