import React, { useRef, useState, useEffect } from 'react';
import { Text, StyleSheet, View, Pressable, TouchableOpacity} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding } from "../GlobalStyles";

import { Camera } from 'expo-camera';


const CAMERA = () => {
  const navigation = useNavigation();
  
  //CAM
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

      <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={(ref) => setCameraRef(ref)} />

      <View style={styles.barramenu}>
        <View style={[styles.circulo]}>
          <Text>Fotos</Text>
        </View>
        <Pressable
          style={styles.botaotirarfoto}
          onPress={(takePicture) => navigation.navigate()} //DIAGNÓSTICO
        >
          <Image
            style={styles.botaoicontirarfoto}
            contentFit="cover"
            source={require("../assets/bototirarfoto.png")}
          />
        </Pressable>
        <View style={styles.dicascaptura}>
          <Image
            style={styles.iconcaptura}
            contentFit="cover"
            source={require("../assets/firrbulb.png")}
          />
          <Text style={[styles.TextdicasDeCaptura]}>
            Dicas de Captura
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //CAMERA
  container: {
    flex: 1,
    alignItems: 'center',
  },
  camera: {
    flex: 0.8,
    width: "100%",
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
