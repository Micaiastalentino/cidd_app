import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const HOME = () => {
  const navigation = useNavigation();

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
              <Image
                style={[styles.lihomeIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/lihome.png")}
              />
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
              onPress={() => navigation.navigate()} //CAMERA
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
      
      {/*Barra Superior Layout*/}
      <View style={[styles.barraDgnc, styles.barraDgncLayout]} />

      <View style={styles.iconAppParent}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/app.png")}
        />
        <Text style={styles.appcaCau}>
          <Text style={styles.appcaCauTxtContainer}>CIDD</Text>
        </Text>
        
        <Pressable
          style={styles.configuracoes_app}
          onPress={() => navigation.navigate()} //CONFIGURAÇÕES
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/fibrmenuburger1.png")}
          />
        </Pressable>

      </View>

      <Text style={[styles.compartilharLink, styles.classificaoFlexBox]}>
        Compartilhar link
      </Text>

      <Text style={[styles.tiposDeClassificao, styles.classificaoFlexBox]}>
        Tipos de Classificação
      </Text>
      
      <Image
        style={[styles.ret_verde_02, styles.homeInnerLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Image
        style={[styles.iconecompartilhamento, styles.barraDgncLayout]}
        contentFit="cover"
        source={require("../assets/iconecompartilhamento.png")}
      />
      <View style={[styles.ret_verde_01, styles.homeInnerLayout]} />
      <Image
        style={styles.iconetiposclassificao}
        contentFit="cover"
        source={require("../assets/iconetiposclassificao.png")}
      />

      <Text style={[styles.classificaoDeDonas, styles.classificaoFlexBox]}>
        CACAU INTELIGENTE:
        DIAGÓSTICO DE DOÊNÇAS
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  homeItemPosition: {
    borderBottomLeftRadius: Border.br_11xl,
    borderBottomRightRadius: Border.br_11xl,
    width: 450,
    height: 700,
    top: 85,
    position: "absolute",
  },
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
    height: "100%",
  },
  homeChild: {
    top: 45,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  lihomeIcon: {
    overflow: "hidden",
  },
  incio: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: "#1bca81",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  menu11: {
    alignItems: "center",
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
  container: {
    borderRadius: 100,
    backgroundColor: "rgba(28, 202, 129, 0.9)",
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

  barrainferior: {
    top:"73%",
    position: "absolute",
  },
  
  barraDgnc: {
    backgroundColor: Color.colorSienna,
    width: "100%",
    left: 0,
    top: 0,
    marginTop: 40,
  },
  appcaCauTxtContainer: {
    width: "50%",
  },
  appcaCau: {
    fontFamily: FontFamily.montserratBold,
    width: "30%",
    marginLeft: 100,
    display: "flex",
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
    width: 105,
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
