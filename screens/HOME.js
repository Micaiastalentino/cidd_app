import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView, Share, Platform, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";
import CAMERA from "./CAMERA";
import { Feather } from '@expo/vector-icons';
//import { TouchableOpacity } from "react-native-gesture-handler";


const HOME = () => {
  const navigation = useNavigation();

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
    <View style={styles.home}>
      <Image
        style={[styles.backgroundCacauIcon, styles.homeItemPosition]}
        contentFit="cover"
        source={require("../assets/background-cacau.png")}
      />
      <Image
        style={styles.homeChild}
        contentFit="cover"
        source={require("../assets/rectangle-13.png")}
      />
      <View style={styles.barrainferior}>
        <View>
          {/*Menu barra inferior Layout*/}
          <View style={styles.menuList}>
            <View style={styles.menu11}>
              <Feather style={[styles.lihomeIcon, styles.iconLayout]} name="home" size={24}/> 
              <Text style={[styles.incio, styles.infoSpaceBlock]}>Início</Text>
            </View>
            <View style={styles.menu11}>
              <Image
                style={[styles.lihomeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/firsinfo1.png")}
              />
              <Text style={[styles.info, styles.infoTypo]}>Info</Text>
            </View>
            <Pressable
              style={styles.menu3}
              onPress={() => navigation.navigate(CAMERA)} //CAMERA
            >
              <View style={styles.container}>
                <Image
                  style={styles.fiRsCameraIcon}
                  contentFit="cover"
                  source={require("../assets/firscamera1.png")}
                />
              </View>
            </Pressable>
            <Pressable
              style={styles.menu11}
              onPress={() => navigation.navigate()} //CAPTURA
            >
              <Image
                style={[styles.lihomeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/liclock.png")}
              />
              <Text style={[styles.info, styles.infoTypo]}>Capturas</Text>
            </Pressable>
            <Pressable
              style={styles.menu11}
              onPress={() => navigation.navigate()} //PERFIL
            >
              <Image
                style={[styles.lihomeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/liuser.png")}
              />
              <Text style={[styles.info, styles.infoTypo]}>Perfil</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Text style={[styles.tiposDeClassificao, styles.classificaoFlexBox]}>
        Tipos de Classificação
      </Text>

      <View style={[styles.ret_verde_01, styles.homeInnerLayout]}>
        <Image
          style={styles.iconetiposclassificao}
          contentFit="cover"
          source={require("../assets/iconetiposclassificao.png")}
        />
      </View>
      <Image
        style={[styles.ret_verde_02, styles.homeInnerLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-12.png")}
      />

      <TouchableOpacity onPress={shareContent}>
        <Text style={[styles.compartilharLink, styles.classificaoFlexBox]}>
          Compartilhar link
        </Text>
        <Image
          style={[styles.iconecompartilhamento, styles.barraDgncLayout]}
          contentFit="cover"
          source={require("../assets/iconecompartilhamento.png")}
        />
      </TouchableOpacity>
      <Text style={[styles.classificaoDeDonas, styles.classificaoFlexBox]}>
        CACAU INTELIGENTE:
        DIAGNÓSTICO DE DOÊNÇAS
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  //IMG SOBREPOSTA CACAU;
  homeItemPosition: {
    borderBottomLeftRadius: Border.br_11xl,
    borderBottomRightRadius: Border.br_11xl,
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  //ICONES;
  iconLayout: {
    height: 24,
    width: 24,
  },

  infoSpaceBlock: {
    marginTop: 6,
    textAlign: "left",
  },

  infoTypo: {
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },

  barraDgncLayout: {
    height: 45,
    position: "absolute",
  },

  classificaoFlexBox: {
    textAlign: "center",
    display: "flex",
    color: Color.colorWhite,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  homeInnerLayout: {
    height: 72,
    width: 74,
    borderRadius: Border.br_11xl,
    top: 365,
    position: "absolute",
  },

  backgroundCacauIcon: {
    width: "100%",
  },

  homeChild: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  lihomeIcon: {
    color: Color.colorRosybrown,
    overflow: "hidden",
  },
  incio: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorRosybrown,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  menu11: {
    alignItems: "center",
    color: Color.colorRosybrown,
    flex: 1,
  },
  info: {
    color: Color.colorRosybrown,
    marginTop: 6,
    textAlign: "left",
  },
  fiRsCameraIcon: {
    borderRadius: 2,
    width: 31,
    height: 30,
    overflow: "hidden",
  },

  //BORDA CAMERA;
  container: {
    borderRadius: 100,
    backgroundColor: "#1cca81",
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 4,
    width: 67,
    height: 67,
    padding: 14,
    flexDirection: "row",
  },

  menu3: {
    width: 83,
    height: 70,
    paddingBottom: Padding.p_12xl,
    alignItems: "center",
  },
  menuList: {
    backgroundColor: Color.colorWhite,
    alignItems: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: 10,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 150,
    height: 65,
    width: "131.7%",
  },

  //BARRA INFERIOR
  barrainferior: {
    top:"70.5%",
    position: "absolute",
  },
  appcaCauTxtContainer: {
    width: "50%",
  },
  appcaCau: {
    fontFamily: FontFamily.montserratBold,
    width: "30%",
    marginLeft: 100,
    color: Color.colorWhite,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    textAlign: "center",
    height: 24,
    alignItems: "center",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  configuracoes_app: {
    width: 20,
    height: 20,
    marginLeft: 120,
  },
  iconAppParent: {
    top: 50,
    left: 12,
    flexDirection: "row",
    position: "absolute",
  },
  
  compartilharLink: {
    top: 450,
    left: 245,
    width: 90,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },


  ret_verde_01: {
    left: 70,
    backgroundColor: "#1cca81",
  },

  iconetiposclassificao: {
    top: 375,
    left: 81,
    width: 53,
    height: 54,
    position: "absolute",
  },

  tiposDeClassificao: {
    top: 450,
    left: 53,
    width: 100,
    height: 34,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },

  iconecompartilhamento: {
    top: 378,
    left: 263,
    width: 45,
    overflow: "hidden",
  },

  ret_verde_02: {
    left: 250,
  },

  classificaoDeDonas: {
    top: 200,
    left: "15%",
    lineHeight: 25,
    fontFamily: FontFamily.robotoBold,
    width: 280,
    height: 100,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    alignItems: "center",
    textAlign: "center",
  },

  //CONTAINER
  home: {
    backgroundColor: "white",
    height:"100%",
    width: "100%",
  },
});

export default HOME;
