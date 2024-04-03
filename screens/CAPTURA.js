import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CAPTURA = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.captura}>
      <View style={[styles.cacauPodridoParda, styles.cacauPosition]}>
        <View style={styles.background}>
          <View style={[styles.retBackground, styles.retBorder]} />
          <View style={[styles.retBackground1, styles.barraCapturasPosition]} />
          <Image
            style={[styles.fiRsMenuDotsVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/images/firsmenudotsvertical1.png")}
          />
        </View>
        <View style={styles.iconcacauParent}>
          <View style={styles.iconcacau}>
            <Image
              style={[styles.iconcacauChild, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/images/ellipse-2.png")}
            />
            <Image
              style={[
                styles.desenhoCacauDoente,
                styles.desenhoCacauDoentePosition,
              ]}
              contentFit="cover"
              source={require("../assets/images/desenho-cacau-doente.png")}
            />
          </View>
          <View style={styles.txtParent}>
            <View>
              <Text style={[styles.horasAtrs, styles.atrsTypo]}>
                3 horas atrás
              </Text>
              <Text style={[styles.podridoParda, styles.podridoPardaTypo]}>
                Podridão Parda
              </Text>
              <Text style={[styles.dePreciso, styles.dePrecisoLayout]}>
                95% de precisão
              </Text>
            </View>
            <View style={styles.btn}>
              <Pressable onPress={() => navigation.navigate("CAMERA")}>
                <View style={[styles.ret, styles.retLayout]} />
                <Text style={[styles.tentarNovamente, styles.mostrar1Typo]}>
                  Tentar novamente
                </Text>
              </Pressable>
              <View style={styles.mostrar}>
                <View style={[styles.ret1, styles.retLayout]} />
                <Text style={[styles.mostrar1, styles.mostrar1Clr]}>
                  Mostrar
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.cacauSaldavel, styles.cacauPosition]}>
        <View style={styles.background}>
          <View style={[styles.retBackground, styles.retBorder]} />
          <View style={[styles.retBackground1, styles.barraCapturasPosition]} />
        </View>
        <View style={styles.iconcacauParent}>
          <Image
            style={[styles.fiRsMenuDotsVerticalIcon1, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/images/firsmenudotsvertical1.png")}
          />
          <View style={styles.cacauicon}>
            <Image
              style={styles.desenhoCacauSaudavek}
              contentFit="cover"
              source={require("../assets/images/desenho-cacau-saudavek.png")}
            />
            <Image
              style={[styles.cacauiconChild, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/images/ellipse-21.png")}
            />
          </View>
          <View style={styles.txtGroup}>
            <View>
              <Text style={[styles.diasAtrs, styles.atrsTypo]}>
                2 dias atrás
              </Text>
              <Text style={[styles.cacauSaldvel, styles.mostrar1Clr]}>
                Cacau saldável
              </Text>
              <Text style={[styles.dePreciso, styles.dePrecisoLayout]}>
                90% de precisão
              </Text>
            </View>
            <View style={styles.btn}>
              <Pressable onPress={() => navigation.navigate("CAMERA")}>
                <View style={[styles.ret, styles.retLayout]} />
                <Text style={[styles.tentarNovamente, styles.mostrar1Typo]}>
                  Tentar novamente
                </Text>
              </Pressable>
              <Pressable
                style={styles.mostrar}
                onPress={() => navigation.navigate("DIAGSAUDAVEL")}
              >
                <View style={[styles.ret1, styles.retLayout]} />
                <Text style={[styles.mostrar1, styles.mostrar1Clr]}>
                  Mostrar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.barraCapturasPosition}>
        <View style={styles.barraDgnc} />
        <View
          style={[
            styles.fiBrAngleRightParent,
            styles.desenhoCacauDoentePosition,
          ]}
        >
          <Pressable
            style={styles.fiBrAngleRight}
            onPress={() => navigation.navigate("HOME")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/images/fibrangleright.png")}
            />
          </Pressable>
          <Text style={styles.capturas}>CAPTURAS</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cacauPosition: {
    left: 15,
    position: "absolute",
  },
  retBorder: {
    height: 101,
    borderWidth: 0.5,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorSienna,
  },
  barraCapturasPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  menuIconLayout: {
    width: 17,
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  childLayout: {
    height: 55,
    width: 55,
  },
  desenhoCacauDoentePosition: {
    position: "absolute",
    zIndex: 1,
  },
  atrsTypo: {
    height: 9,
    display: "flex",
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_5xs,
    alignItems: "center",
  },
  podridoPardaTypo: {
    width: 115,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  dePrecisoLayout: {
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
  },
  retLayout: {
    height: 28,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 0.5,
    borderStyle: "solid",
    zIndex: 0,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  mostrar1Typo: {
    justifyContent: "center",
    fontSize: FontSize.size_2xs,
    top: 4,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    zIndex: 1,
    position: "absolute",
  },
  mostrar1Clr: {
    color: Color.colorLimegreen,
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
  },
  retBackground: {
    borderRadius: Border.br_3xs,
    width: 327,
    zIndex: 0,
  },
  retBackground1: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 75,
    zIndex: 1,
    height: 101,
    borderWidth: 0.5,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorSienna,
  },
  fiRsMenuDotsVerticalIcon: {
    right: 2,
    bottom: 73,
    zIndex: 2,
    overflow: "hidden",
    top: 12,
  },
  background: {
    zIndex: 0,
  },
  iconcacauChild: {
    zIndex: 0,
  },
  desenhoCacauDoente: {
    top: 5,
    left: 9,
    width: 36,
    height: 45,
    zIndex: 1,
  },
  iconcacau: {
    flexDirection: "row",
  },
  horasAtrs: {
    width: 52,
  },
  podridoParda: {
    color: "#e68767",
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
    width: 115,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  dePreciso: {
    width: 68,
    height: 10,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xs,
    display: "flex",
    color: Color.colorSienna,
    lineHeight: 20,
  },
  ret: {
    width: 124,
    borderColor: Color.colorSienna,
    height: 28,
    borderRadius: Border.br_8xs,
  },
  tentarNovamente: {
    left: 6,
    width: 113,
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
    color: Color.colorSienna,
    fontSize: FontSize.size_2xs,
    top: 4,
  },
  ret1: {
    borderColor: Color.colorLimegreen,
    width: 76,
  },
  mostrar1: {
    left: 3,
    width: 70,
    justifyContent: "center",
    fontSize: FontSize.size_2xs,
    top: 4,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    zIndex: 1,
    position: "absolute",
  },
  mostrar: {
    width: 76,
    marginLeft: 22,
  },
  btn: {
    marginTop: 9,
    flexDirection: "row",
  },
  txtParent: {
    marginLeft: 22,
  },
  iconcacauParent: {
    top: 15,
    left: 8,
    alignItems: "center",
    flexDirection: "row",
    zIndex: 1,
    position: "absolute",
  },
  cacauPodridoParda: {
    top: 183,
  },
  fiRsMenuDotsVerticalIcon1: {
    top: -4,
    right: -13,
    bottom: 64,
    overflow: "hidden",
    zIndex: 0,
  },
  desenhoCacauSaudavek: {
    height: "63.17%",
    width: "75%",
    top: "15%",
    right: "16.67%",
    bottom: "21.83%",
    left: "8.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 0,
    position: "absolute",
  },
  cacauiconChild: {
    marginLeft: 10,
    zIndex: 1,
  },
  cacauicon: {
    width: 60,
    height: 60,
    marginLeft: 22,
    flexDirection: "row",
    zIndex: 1,
  },
  diasAtrs: {
    width: 47,
  },
  cacauSaldvel: {
    width: 115,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  txtGroup: {
    marginLeft: 22,
    zIndex: 2,
  },
  cacauSaldavel: {
    top: 66,
  },
  barraDgnc: {
    backgroundColor: Color.colorSienna,
    width: 360,
    height: 45,
    zIndex: 0,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  fiBrAngleRight: {
    width: 20,
    height: 20,
  },
  capturas: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    width: 151,
    marginLeft: 78,
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  fiBrAngleRightParent: {
    left: 7,
    flexDirection: "row",
    top: 12,
    zIndex: 1,
  },
  captura: {
    borderRadius: Border.br_5xs,
    flex: 1,
    height: 640,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default CAPTURA;
