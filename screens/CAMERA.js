  import React, { useState, useEffect } from 'react';
  import { Text, StyleSheet, View, Pressable, TouchableOpacity, ActivityIndicator, Modal, Alert, Dimensions } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
  import { MaterialIcons } from '@expo/vector-icons';
  import { Image } from "expo-image";
  import axios from 'axios';
  import { CameraView, useCameraPermissions } from 'expo-camera';
  import { selecionarImagem, convertImageToBase64 } from "../components/ImagePicker/ImagePicker";
  import CustomModal from "../components/CustomModal/CustomModal";
  import { FlashMode } from 'expo-camera/build/legacy/Camera.types';
  import NetInfo from '@react-native-community/netinfo';
  import { color } from 'd3-color';

  
  const LoadingModal = ({ visible }) => (
    <Modal transparent visible={visible}>
      <View style={styles.loadingContainer}>
        <Image 
          source={require('../assets/images/app-logo-cacau.png')} // Caminho da sua imagem
          style={styles.loadingImage} 
        />
        <ActivityIndicator 
          size={60} 
          color="#9F7766" 
        />
        <Text style={{ color: '#9F7766' }}>Diagnosticando...</Text>
      </View>
    </Modal>
  );

  const CAMERA = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [cameraRef, setCameraRef] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const [imageBase64, setImageBase64] = useState(null);
    const [respostaAPI, setRespostaAPI] = useState(null);
    const [permission, requestPermission] = useCameraPermissions();
    const [facing, setFacing] = useState('back');
    const [flash, setFlash] = useState('off');
    const [isCameraReady, setIsCameraReady] = useState(false);
    const [noCacauCount, setNoCacauCount] = useState(0); // Estado para contar as classificações incorretas
    const [conect, setConect] = useState(true);

    //Efeito para monitorar o estado da conexão do dispositivo;
    useEffect (()=>{
      const unsubscribe = NetInfo.addEventListener(state => {
        setConect(state.isConnected);
        console.log(conect);
      });
      return () => unsubscribe();
    }, []);

    //Efeito para atualizar o estado da resposta da API.
    useEffect(() => {
      if (respostaAPI !== null) {
        if (!('cacau' in respostaAPI && 'no_cacau' in respostaAPI)) {
          navigation.navigate('DIAGSAUDAVEL_TST', { capturedImage, respostaAPI });
        } else {
          setNoCacauCount(prevCount => prevCount + 1); // Incrementa o contador
          if (noCacauCount + 1 >= 3) { // Verifica se atingiu 3 erros consecutivos
            Alert.alert(
              'Alerta',
              'O modelo classificou incorretamente 3 vezes seguidas. Verifique as condições de captura da imagem.',
              [{ text: 'OK', onPress: () => setNoCacauCount(0) }] // Reseta o contador após o alerta
            );
          } else {
            Alert.alert(
              'Ops, peço desculpa',
              'Não foi possível localizar um fruto de cacaueiro. Poderia enviar outra fotografia, por favor?',
              [
                {
                  text: 'DICAS',
                  onPress: () => setModalVisible(true),
                  style: 'default'
                },
                {
                  text: 'OK',
                  onPress: () => console.log('Usuário confirmou'),
                  style: 'default'
                }
              ]
            );
          }
        }
      }
    }, [respostaAPI]);

    if (!permission) {
      return <View />;
    }

    if (!permission.granted) {
      return (
        <View style={styles.permiss}>
          <View>
            <Text style={styles.tit1}>Para que você possa capturar ou enviar fotos diretamente pelo nosso aplicativo, precisamos da sua permissão para acessar a câmera e a galeria do seu dispositivo.</Text>
          </View>
          <TouchableOpacity style={styles.botao} onPress={requestPermission}>
            <Text style={styles.tit2}>
              Permitir acesso a câmera 
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    const showLoading = () => {
      setIsLoading(true);
    };

    const takePicture = async () => {
      if (cameraRef) {
        const image = await cameraRef.takePictureAsync({ quality: 1 });
        setCapturedImage(image.uri);
        try {
          const img_cam_base64 = await convertImageToBase64(image.uri);
          if (img_cam_base64) {
            setImageBase64(img_cam_base64);
            //console.log(imageBase64)
            await chamarAPI(img_cam_base64);
          }
        } catch (error) {
          console.error('Erro ao converter imagem:', error);
        }
      }
    };

    const selecionarImagemHandler = async () => {
      try {
        const img_armaz = await selecionarImagem();
        setCapturedImage(img_armaz);
        if (img_armaz) {
          const img_armaz_base64 = await convertImageToBase64(img_armaz);
          setImageBase64(img_armaz_base64);
          showLoading();
          await chamarAPI(img_armaz_base64);
        } else {
          Alert.alert('Nenhuma imagem selecionada', 'Por favor, selecione uma imagem.');
        }
      } catch (error) {
        console.error('Erro ao selecionar imagem:', error);
      }
    };
    
    const chamarAPI = async (imageBase64) => {
      try {
        if (!imageBase64) {
          console.log('Selecione uma imagem antes de chamar a API');
          return;
        }

        // Verificar se há conexão com a internet antes de fazer a chamada à API
        if (!conect) {
          console.log(conect);
          Alert.alert('Sem Conexão', 'Você está sem conexão com a internet.');
          return;
        }

        const config = {
          headers: {
            'Content-Type': 'text/plain',
          },
        };
        //Rota API;
        const res = await axios.post('https://api-cidd.npca.tec.br/predict', imageBase64, config); //Endereço api rest;
        setRespostaAPI(res.data.predictions); //Atualiza RespostaAPI;
        console.log("RespostaAPI:", res.data.predictions);

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

    function toggleCameraFacing() {
      setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    function toggleCameraFlash() {
      setFlash(current => (current === 'off' ? 'on' : 'off'));
    }

    const onCameraReady = () => {
      setIsCameraReady(true);
    };
    
    return (
      <View style={styles.container}>

        <CameraView 
          style={styles.camera}
          facing={facing}
          flash={flash}
          ref={(ref) => setCameraRef(ref)}
          onCameraReady={onCameraReady}
          autoFocus={true}
          zoom={0.1}
        > 
          <View style={styles.cameraButtonContainer}>
            <TouchableOpacity style={styles.cameraButton} onPress={toggleCameraFlash}>
              <MaterialIcons name={flash === FlashMode.off ? 'flash-off' : 'flash-on'} size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cameraButton} onPress={toggleCameraFacing}>
              <MaterialIcons name="flip-camera-ios" size={36} color="white" />
            </TouchableOpacity>
          </View>
        </CameraView>

        <View style={styles.barramenu}>
          <TouchableOpacity style={[styles.circulo]}
            onPress={async () => {
              try {
                await selecionarImagemHandler();
              } catch (error) {
                console.error('Erro ao processar solicitação:', error);
              } finally {
                setIsLoading(false);
              }
            }}>
            <Text style={[styles.tirarfoto, styles.fonttext]}>Fotos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaotirarfoto}
            onPress={async () => {
              await new Promise((resolve) => setTimeout(resolve, 1000)); //Pausa de 1s antes de chamar a API;
              showLoading();
              try {
                await takePicture();
              } catch (error) {
                console.error('Erro ao processar solicitação:', error);
              } finally {
                setIsLoading(false);
              }
            }}>
            <Image
              style={styles.botaoicontirarfoto}
              contentFit="cover"
              source={require("../assets/images/bototirarfoto.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.dicascaptura} onPress={() => setModalVisible(true)}>
            <Image
              style={styles.iconcaptura}
              contentFit="cover"
              source={require("../assets/images/firrbulb.png")}
            />
            <Text style={[styles.TextdicasDeCaptura, styles.fonttext]}>
              Dicas de Captura
            </Text>
            <CustomModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              modalText="Entendido!"
            />
          </TouchableOpacity>
        </View>
        <LoadingModal visible={isLoading} />
      </View>
    );
  };

  //Estilos GlobalStyles;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',

    },

    permiss: {
      flex: 1,
      backgroundColor: "#6f4330",
      alignItems: 'center'
    },

    botao: {
      alignContent: 'center',
      marginTop: "5%",
      width: "60%",
      height: "auto",
      backgroundColor: "#1cca81",
      borderRadius: 20,
    },

    fonttext:{
      fontWeight: "500",
      fontFamily: FontFamily.poppinsMedium,
      color: Color.colorSienna,
      fontSize: 13,
    },

    tit1: {
      fontFamily: FontFamily.poppinsRegular,
      color: "white",
      margin: 10,
      lineHeight: 16,
      fontSize: FontSize.size_xs,
    },

    tit2: {
      fontFamily: FontFamily.poppinsRegular,
      textAlign: 'center',
      color: "white",
      margin: 10,
      lineHeight: 16,
      fontSize: 14,
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

    //Barra menu;
    barramenu: {
      backgroundColor: Color.colorWhite,
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      justifyContent: 'space-around',
      height: 180,
      width: "100%",
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },

    modal:{
      margin: 10,
    },

      loadingImage:{
      width: 30, // Largura da imagem
      height: 30, // Altura da imagem
      marginBottom: -45 // Espaçamento entre a imagem e o ActivityIndicator
      //position: "absolute", // Espaçamento entre a imagem e o ActivityIndicator
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
      borderRadius: Border.br_11xl,
      borderStyle: "solid",
      borderColor: Color.colorSienna,
      borderWidth: 2,
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