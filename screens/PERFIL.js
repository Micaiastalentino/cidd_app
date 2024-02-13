import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const PERFIL = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfil}>
      <View style={styles.retBackground} />
      <View style={styles.contedo}>
        <View style={[styles.salvar, styles.salvarLayout]}>
          <View style={styles.azul} />
          <Text style={styles.salvar1}>SALVAR</Text>
        </View>
        <View style={styles.celular}>
          <Text style={[styles.celular1, styles.celular1Typo]}>Celular</Text>
          <View style={[styles.ret, styles.retBorder]} />
          <Text
            style={[styles.text, styles.textTypo]}
          >{`(99) 99999-9999 `}</Text>
        </View>
        <View style={[styles.dataNascimento, styles.nomePosition]}>
          <Text style={[styles.dataDeNascimento, styles.ret1Layout]}>
            Data de Nascimento
          </Text>
          <View style={[styles.ret1, styles.ret1Layout]} />
          <Text style={[styles.xxXx, styles.xxXxPosition]}>XX / XX / XXXX</Text>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
        </View>
        <View style={[styles.nome, styles.nomePosition]}>
          <Text style={[styles.celular1, styles.celular1Typo]}>Nome</Text>
          <View style={[styles.ret, styles.retBorder]} />
          <Text style={[styles.nomeUsurio, styles.nomeUsurioPosition]}>
            Nome Usuário
          </Text>
        </View>
        <View style={[styles.button, styles.salvarLayout]}>
          <View style={[styles.azul1, styles.azul1Bg]} />
          <Text style={styles.salvar1}>Alterar senha</Text>
        </View>
        <View style={styles.login}>
          <Text style={[styles.celular1, styles.celular1Typo]}>Login:*</Text>
          <View style={[styles.loginChild, styles.retBorder]} />
          <Text style={[styles.examplegmailcom, styles.nomeUsurioPosition]}>
            example@gmail.com
          </Text>
        </View>
        <View style={[styles.user, styles.userPosition]}>
          <Image
            style={styles.usericon}
            contentFit="cover"
            source={require("../assets/usericon.png")}
          />
          <Text style={[styles.mudarFoto, styles.mudarFotoTypo]}>
            Mudar foto
          </Text>
        </View>
      </View>
      <View style={[styles.barraMeuPerfil, styles.userPosition]}>
        <View style={[styles.barraDgnc, styles.azul1Bg]} />
        <View style={[styles.fiBrAngleRightParent, styles.xxXxPosition]}>
          <Pressable
            style={styles.fiBrAngleRight}
            onPress={() => navigation.navigate("HOME")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/fibrangleright.png")}
            />
          </Pressable>
          <Text style={styles.meuPerfil}>MEU PERFIL</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  salvarLayout: {
    width: 93,
    position: "absolute",
  },
  celular1Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    zIndex: 0,
  },
  retBorder: {
    borderWidth: 1,
    borderColor: Color.colorSienna,
    borderStyle: "solid",
    zIndex: 1,
    overflow: "hidden",
    height: 34,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  textTypo: {
    zIndex: 2,
    top: 27,
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
  },
  nomePosition: {
    top: 257,
    position: "absolute",
  },
  ret1Layout: {
    width: 139,
    alignItems: "center",
  },
  xxXxPosition: {
    left: 7,
    position: "absolute",
  },
  nomeUsurioPosition: {
    left: 11,
    zIndex: 2,
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    top: 27,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
    position: "absolute",
  },
  azul1Bg: {
    backgroundColor: Color.colorSienna,
    zIndex: 0,
  },
  userPosition: {
    top: 0,
    position: "absolute",
  },
  mudarFotoTypo: {
    fontSize: FontSize.size_3xs,
    display: "flex",
    lineHeight: 20,
  },
  retBackground: {
    top: 45,
    borderBottomRightRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    backgroundColor: Color.colorWhite,
    height: 180,
    width: 360,
    left: 0,
    position: "absolute",
  },
  azul: {
    backgroundColor: Color.colorForestgreen,
    zIndex: 0,
    alignItems: "center",
    overflow: "hidden",
    height: 34,
    borderRadius: Border.br_8xs,
    width: 93,
  },
  salvar1: {
    top: 8,
    fontSize: FontSize.size_2xs,
    height: 18,
    zIndex: 1,
    justifyContent: "center",
    display: "flex",
    lineHeight: 20,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    alignItems: "center",
    width: 93,
    left: 0,
    position: "absolute",
  },
  salvar: {
    top: 419,
    left: 0,
  },
  celular1: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 20,
  },
  ret: {
    width: 175,
    alignItems: "center",
  },
  text: {
    left: 10,
    width: 155,
    position: "absolute",
  },
  celular: {
    top: 331,
    left: 1,
    position: "absolute",
  },
  dataDeNascimento: {
    fontSize: FontSize.size_3xs,
    display: "flex",
    lineHeight: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    zIndex: 0,
  },
  ret1: {
    borderWidth: 1,
    borderColor: Color.colorSienna,
    borderStyle: "solid",
    zIndex: 1,
    overflow: "hidden",
    height: 34,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  xxXx: {
    width: 95,
    zIndex: 2,
    top: 27,
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
  },
  groupIcon: {
    height: "22.59%",
    width: "7.91%",
    top: "57.41%",
    right: "5.76%",
    bottom: "20%",
    left: "86.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 3,
    overflow: "hidden",
    position: "absolute",
  },
  dataNascimento: {
    left: 192,
  },
  nomeUsurio: {
    width: 158,
  },
  nome: {
    left: 1,
  },
  azul1: {
    alignItems: "center",
    overflow: "hidden",
    height: 34,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorSienna,
    width: 93,
  },
  button: {
    top: 200,
    left: 238,
  },
  loginChild: {
    width: 228,
    alignItems: "center",
  },
  examplegmailcom: {
    width: 164,
  },
  login: {
    top: 180,
    left: 1,
    position: "absolute",
  },
  usericon: {
    width: 142,
    height: 142,
  },
  mudarFoto: {
    color: "#706a6a",
    width: 73,
    height: 19,
    marginTop: 2,
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  user: {
    left: 95,
    alignItems: "center",
  },
  contedo: {
    top: 56,
    left: 14,
    width: 331,
    height: 453,
    position: "absolute",
  },
  barraDgnc: {
    height: 45,
    width: 360,
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
  meuPerfil: {
    fontSize: FontSize.size_base,
    width: 151,
    marginLeft: 78,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  fiBrAngleRightParent: {
    top: 12,
    flexDirection: "row",
    zIndex: 1,
  },
  barraMeuPerfil: {
    left: 0,
  },
  perfil: {
    borderRadius: Border.br_5xs,
    flex: 1,
    height: 640,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default PERFIL;
