import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const CONFIGURACOES = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.configuracoes}>
      <View style={styles.sobreOApp}>
        <Image
          style={styles.iconLayout2}
          contentFit="cover"
          source={require("../assets/logo-app.png")}
        />
        <Text style={[styles.sobreOAplicativo, styles.avalieEComenteTypo]}>
          Sobre o aplicativo
        </Text>
      </View>
      <View style={[styles.contato, styles.dicasPosition]}>
        <Image
          style={styles.mailIcon}
          contentFit="cover"
          source={require("../assets/mail.png")}
        />
        <Text style={[styles.sobreOAplicativo, styles.avalieEComenteTypo]}>
          Contate-nos
        </Text>
      </View>
      <View style={[styles.dicas, styles.dicasPosition]}>
        <Image
          style={styles.errorIcon}
          contentFit="cover"
          source={require("../assets/error.png")}
        />
        <Text style={[styles.sobreOAplicativo, styles.avalieEComenteTypo]}>
          Dicas para tirar fotos
        </Text>
      </View>
      <View style={[styles.informaesApp, styles.appPosition]}>
        <View style={[styles.informaesAppChild, styles.barraDgncPosition]} />
        <View style={[styles.sobreOCacau, styles.sobreOCacauPosition]}>
          <Text
            style={[styles.informaesAjuda, styles.configuraes1Typo]}
          >{`INFORMAÇÕES & AJUDA`}</Text>
        </View>
      </View>
      <View style={[styles.error, styles.errorPosition]}>
        <Image
          style={[styles.fiRrStarIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/firrstar.png")}
        />
        <Text style={[styles.avalieEComente, styles.avalieEComenteTypo]}>
          Avalie e comente
        </Text>
      </View>
      <View style={[styles.error1, styles.errorPosition]}>
        <Image
          style={[styles.errorIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/error1.png")}
        />
        <Text style={[styles.informeUmProblema, styles.avalieEComenteTypo]}>
          Informe um problema
        </Text>
      </View>
      <View style={[styles.instagram, styles.dicasPosition]}>
        <Image
          style={[styles.instagramIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/instagram.png")}
        />
        <Text style={[styles.sobreOAplicativo, styles.avalieEComenteTypo]}>
          Siga-nos no Instagram
        </Text>
      </View>
      <View style={[styles.compartilhar, styles.dicasPosition]}>
        <Image
          style={styles.iconLayout2}
          contentFit="cover"
          source={require("../assets/compartilhar1.png")}
        />
        <Text style={[styles.sobreOAplicativo, styles.avalieEComenteTypo]}>
          Partilhar link de download
        </Text>
      </View>
      <View style={[styles.apoieEsseApp, styles.appPosition]}>
        <View style={[styles.informaesAppChild, styles.barraDgncPosition]} />
        <View style={[styles.sobreOCacau, styles.sobreOCacauPosition]}>
          <Text style={[styles.informaesAjuda, styles.configuraes1Typo]}>
            APOIE ESSE APP
          </Text>
        </View>
      </View>
      <View style={[styles.configuraes, styles.appPosition]}>
        <View style={[styles.barraDgnc, styles.barraDgncPosition]} />
        <View style={[styles.fiBrAngleRightParent, styles.sobreOCacauPosition]}>
          <Pressable
            style={styles.fiBrAngleRight}
            onPress={() => navigation.navigate("HOME")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/fibrangleright.png")}
            />
          </Pressable>
          <Text style={[styles.configuraes1, styles.configuraes1Typo]}>
            CONFIGURAÇÕES
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avalieEComenteTypo: {
    height: 22,
    width: 190,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 14,
    fontSize: FontSize.size_2xs,
    display: "flex",
    color: Color.colorSienna,
    alignItems: "center",
  },
  dicasPosition: {
    left: 13,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  appPosition: {
    left: 0,
    position: "absolute",
  },
  barraDgncPosition: {
    zIndex: 0,
    width: 360,
  },
  sobreOCacauPosition: {
    zIndex: 1,
    position: "absolute",
  },
  configuraes1Typo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
  },
  errorPosition: {
    left: 12,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 18,
    overflow: "hidden",
  },
  iconLayout2: {
    height: 16,
    width: 16,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  sobreOAplicativo: {
    marginLeft: 9,
  },
  sobreOApp: {
    top: 352,
    left: 14,
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
  },
  mailIcon: {
    height: 13,
    overflow: "hidden",
    width: 16,
  },
  contato: {
    top: 325,
  },
  errorIcon: {
    width: 17,
    height: 17,
    overflow: "hidden",
  },
  dicas: {
    top: 298,
  },
  informaesAppChild: {
    backgroundColor: Color.colorWhite,
    height: 31,
  },
  informaesAjuda: {
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    height: "100%",
    width: "100%",
    display: "flex",
    color: Color.colorSienna,
    fontWeight: "700",
    alignItems: "center",
    position: "absolute",
  },
  sobreOCacau: {
    height: "71.29%",
    width: "92.06%",
    top: "12.9%",
    right: "4.61%",
    bottom: "15.81%",
    left: "3.33%",
  },
  informaesApp: {
    top: 252,
  },
  fiRrStarIcon: {
    width: 16,
  },
  avalieEComente: {
    marginLeft: 10,
  },
  error: {
    top: 164,
  },
  errorIcon1: {
    width: 18,
  },
  informeUmProblema: {
    marginLeft: 8,
  },
  error1: {
    top: 191,
  },
  instagramIcon: {
    overflow: "hidden",
  },
  instagram: {
    top: 137,
  },
  compartilhar: {
    top: 110,
  },
  apoieEsseApp: {
    top: 64,
  },
  barraDgnc: {
    backgroundColor: Color.colorSienna,
    height: 45,
  },
  icon: {
    overflow: "hidden",
  },
  fiBrAngleRight: {
    width: 20,
    height: 20,
  },
  configuraes1: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    width: 151,
    marginLeft: 78,
  },
  fiBrAngleRightParent: {
    top: 12,
    left: 7,
    flexDirection: "row",
    zIndex: 1,
  },
  configuraes: {
    top: 0,
  },
  configuracoes: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    height: 640,
    width: "100%",
  },
});

export default CONFIGURACOES;
