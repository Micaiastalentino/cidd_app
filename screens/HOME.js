import React, {useState} from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView, Share, Platform, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";
import CAMERA from "./CAMERA";
import { Feather } from '@expo/vector-icons';
import LOGIN from "./LOGIN";
import CAPTURA from "./CAPTURA";
import CustomModal from "../components/ViewDicas/ViewDicas"


const HOME = () => {
  const navigation = useNavigation();
  const [selectedIcon, setSelectedIcon] = React.useState('home');
  const [modalVisible, setModalVisible] = useState(false);
  //FUNÇÃO COMPARTILHAMENTO;
  const shareContent = () => {
    console.log("Pressionado");
    if (Platform.OS === 'android') {
      Share.share({
        message: 'Confira este link: https://www.appcidd.com.br',
      });
    } else {
      // Implemente a lógica de compartilhamento para outras plataformas (iOS, por exemplo)
    }
  };

  return (
    <View style={styles.containerPrincipal}>
      {/*BACKGROUND DE FUNDO*/}
      <Image
        style={[styles.background]}
        contentFit="cover"
        source={require("../assets/images/background-cacau.png")}
      />
      <Image
        style={styles.ret_background}
        contentFit="cover"
        source={require("../assets/images/rectangle-13.png")}
      />

      {/*MENU BARRA INFERIOR*/}
      <View style={styles.contMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => setSelectedIcon('home')}>
          <Feather name="home" size={30} color={selectedIcon === 'home' ? "#1cca81" : 'black'} /> 
          <Text style={styles.home}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, styles.info]}  onPress={() => setModalVisible(true)}>
          <Feather name="info" size={30} color={Color.colorSienna}/>
          <Text style={styles.fontMenu}>Info</Text>
          <CustomModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            modalText="Entendido!"
          />
        </TouchableOpacity>
        
        <View style={styles.menuItem}>
          <Pressable  onPress={() => navigation.navigate(CAMERA)}>
            <View style={styles.bordaCam}>
              <Feather name="camera" size={34} color={'white'}/>
            </View>
          </Pressable>
        </View>

        <Pressable style={styles.menuItem} onPress={() => navigation.navigate(CAPTURA)}>
          <Feather name="clock" size={30} color={Color.colorSienna}/>
          <Text style={styles.fontMenu}>Capturas</Text>
        </Pressable>

        <Pressable style={styles.menuItem} onPress={() => navigation.navigate()}>
          <Feather name="user" size={30} color={Color.colorSienna}/>
          <Text style={styles.fontMenu}>Perfil</Text>
        </Pressable>
      </View>


      <TouchableOpacity>
        <View style={[styles.ret_verde_01, styles.tamanhoRet]}></View>
        <Text style={[styles.txtTipoClassi, styles.alinhamento]}>
          Tipos de Classificação
        </Text>
        <Image
          style={styles.iconTipoClassi}
          contentFit="cover"
          source={require("../assets/images/iconetiposclassificao.png")}
        />
      </TouchableOpacity>


      <TouchableOpacity onPress={shareContent}>
        <View style={[styles.ret_verde_02, styles.tamanhoRet]}></View>
        <Text style={[styles.compartilharLink, styles.alinhamento]}>
          Compartilhar link
        </Text>
        <Image
          style={[styles.iconeComp]}
          contentFit="cover"
          source={require("../assets/images/iconecompartilhamento.png")}
        />
      </TouchableOpacity>

      <View style={styles.txtTituloPosi}>
        <Text style={[styles.txtTituloProjeto]}>
          CACAU INTELIGENTE: DIAGNÓSTICO DE DOENÇAS
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //CONTAINER ()
  containerPrincipal: {
    flex: 1,
    justifyContent: 'center'
  },
  //BACKGROUND CACAU;
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  //RETANGULO TRANSPARENTE BACKGROUND;
  ret_background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  //ICONES BARRA INFERIOR;
  iconLayout: {
    height: 24,
    width: 24,
  },
  //BARRA INFERIOR CONF.
  contMenu: {
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingVertical: 10,
    justifyContent: 'space-around',
    height: 65,
    width: "100%",
    position: 'absolute', // Alterado para 'absolute'
    bottom: 0,
    left: 0,
    right: 0,
    
  },
  menuItem: {
    alignItems: 'center',
  },
  info:{
    left: 10,
  },
  home:{
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: "#1cca81",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  fontMenu:{
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorSienna,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },

  //BORDA CAMERA;
  bordaCam: {
    flexDirection:'row',
    borderRadius: 100,
    backgroundColor: "#1cca81",
    borderColor: Color.colorWhite,
    borderWidth: 4,
    width: 70,
    height: 70,
    padding: 14,
    left: '20%',
  },

  //Tipos de Classificação
  iconTipoClassi: {
    top: "60%",
    left: 83,
    width: 53,
    height: 54,
    position: "absolute",
  },
  ret_verde_01: {
    left: 70,
    top: "50%",
    backgroundColor: "#1cca81",
  },
  txtTipoClassi: {
    left: "16%",
    top: "60%",
    width: 100,
    lineHeight: 16,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
  },

  //Compartilhar Link
  compartilharLink: {
    top: '-40%',
    left: 245,
    width: 90,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  iconeComp: {
    top: -38,
    left: 265,
    width: 45,
    height: 45,
    position: 'absolute',
  },
  ret_verde_02: {
    left: 250,
    top: -55,
    backgroundColor: "#1cca81",
  },
  ////////
  alinhamento: {
    textAlign: "center",
    color: Color.colorWhite,
  },
  tamanhoRet: {
    height: 80,
    width: 80,
    position: 'relative',
    borderRadius: Border.br_11xl,
  },
  //TITULO CIDD;
  txtTituloProjeto: {
    flexDirection: 'row',
    textAlign: 'center',
    lineHeight: 25,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    color: Color.colorWhite,    
  },
  txtTituloPosi:{
    width: "70%",
    height: "8%",
    top: "-50%",
    marginLeft: "15%",
    position: 'relative'
  }

});

export default HOME;