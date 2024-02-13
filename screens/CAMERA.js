import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const CAMERA = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.camera}>
      <View style={styles.barramenu}>
        <View style={[styles.fotos, styles.fotosFlexBox]}>
          <Text style={[styles.fotos1, styles.fotos1Typo]}>Fotos</Text>
        </View>
        <Pressable
          style={styles.bototirarfoto}
          onPress={() => navigation.navigate("DIAGSAUDAVEL")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/bototirarfoto.png")}
          />
        </Pressable>
        <View style={styles.dicascaptura}>
          <Image
            style={styles.fiRrBulbIcon}
            contentFit="cover"
            source={require("../assets/firrbulb.png")}
          />
          <Text style={[styles.dicasDeCaptura, styles.fotos1Typo]}>
            Dicas de Captura
          </Text>
        </View>
      </View>
      <Image
        style={[
          styles.cacauSaudavelBackgroundIcon,
          styles.barraSuperiorFixaPosition,
        ]}
        contentFit="cover"
        source={require("../assets/cacau-saudavel-background.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.flashCam}>
        <Image
          style={styles.flashDesligadoIcon}
          contentFit="cover"
          source={require("../assets/flash-desligado.png")}
        />
        <Image
          style={styles.girarCamIcon}
          contentFit="cover"
          source={require("../assets/girar-cam.png")}
        />
      </View>
      <View
        style={[styles.barraSuperiorFixa, styles.barraSuperiorFixaPosition]}
      >
        <View style={styles.barraDgnc} />
        <View style={styles.fiBrAngleRightParent}>
          <Pressable
            style={styles.fiBrAngleRight}
            onPress={() => navigation.navigate("HOME")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/fibrangleright.png")}
            />
          </Pressable>
          <Text style={styles.appcacau}>APPCACAU</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fotosFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  fotos1Typo: {
    color: Color.colorSienna,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  barraSuperiorFixaPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  fotos1: {
    textAlign: "left",
  },
  fotos: {
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
  bototirarfoto: {
    width: 74,
    height: 74,
    marginLeft: 37,
  },
  fiRrBulbIcon: {
    width: 34,
    height: 33,
    overflow: "hidden",
  },
  dicasDeCaptura: {
    textAlign: "center",
    display: "flex",
    width: 108,
    justifyContent: "center",
    alignItems: "center",
  },
  dicascaptura: {
    width: 97,
    marginLeft: 37,
    alignItems: "center",
  },
  barramenu: {
    top: 558,
    left: 10,
    height: 60,
    minHeight: 60,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  cacauSaudavelBackgroundIcon: {
    top: 45,
    height: 485,
    width: 360,
  },
  vectorIcon: {
    top: 161,
    left: 34,
    width: 292,
    height: 292,
    position: "absolute",
  },
  flashDesligadoIcon: {
    width: 21,
    height: 21,
  },
  girarCamIcon: {
    width: 25,
    height: 25,
    marginLeft: 18,
  },
  flashCam: {
    top: 121,
    left: 258,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  barraDgnc: {
    backgroundColor: Color.colorSienna,
    height: 45,
    zIndex: 0,
    width: 360,
  },
  icon1: {
    overflow: "hidden",
  },
  fiBrAngleRight: {
    width: 20,
    height: 20,
  },
  appcacau: {
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorWhite,
    marginLeft: 96,
    textAlign: "left",
  },
  fiBrAngleRightParent: {
    top: 12,
    left: 12,
    zIndex: 1,
    flexDirection: "row",
    position: "absolute",
  },
  barraSuperiorFixa: {
    top: 0,
  },
  camera: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 640,
    width: "100%",
  },
});

export default CAMERA;
