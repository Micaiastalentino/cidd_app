import * as React from "react";
import { Text, TextInput, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const CADASTRESE = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cadastreSe}>
      {/* Botão Efetuar Cadastro */}
      <Pressable
        style={[styles.cadastro, styles.cadastroFlexBox]}
        onPress={() => navigation.navigate("HOME")}
      >
        <Text style={[styles.efetuarCadastro, styles.entrarComOTypo]}>
          Efetuar Cadastro
        </Text>
      </Pressable>
    
      {/*NOME*/}
      <View style={[styles.nome, styles.nomePosition]}>
        <Text style={[styles.nome1, styles.nomeTypo]}>Nome</Text>
        <View style={[styles.nomeInner, styles.innerBorder]}>
          <TextInput style={[styles.forms, styles.retBorder]}
            placeholder="Nome"
          />
        </View>
      </View>
      
      {/*EMAIL*/}
      <View style={[styles.email, styles.nomePosition]}>
        <Text style={[styles.nome1, styles.nomeTypo]}>Email</Text>
        <View style={[styles.nomeInner, styles.innerBorder]}>
          <TextInput style={[styles.forms, styles.retBorder]}
            placeholder="E-mail"
          />
        </View>
      </View>

      {/*SENHA*/}
      <View style={[styles.senha, styles.nomePosition]}>
        <View style={styles.senha1}>
          <Text style={[styles.nome1, styles.nomeTypo]}>Senha</Text>
          <View style={[styles.nomeInner, styles.innerBorder]}>
            <TextInput style={[styles.forms, styles.retBorder]}
              placeholder="Senha"
            />
          </View>
        </View>
        {/*Text mínimo 6 caracteres;*/}
        <Text style={[styles.mnimo6Caracteres, styles.googleJpegPosition]}>
          Mínimo 6 caracteres
        </Text>
      </View>

      {/* Entrar com o Google */}
      <View style={styles.google}>

        <View style={styles.google1}>
          <View style={[styles.googleInner, styles.innerBorder]}>
            <View style={[styles.entrarComOGoogleWrapper, styles.inicioFlexBox1]}>
              <Text style={[styles.entrarComO, styles.entrarComOLayout]}>
                Entrar com o Google
              </Text>
            </View>
          </View>
          <Image
            style={[styles.googleJpeg, styles.googleJpegPosition]}
            contentFit="cover"
            source={require("../assets/google--jpeg.png")}
          />
        </View>
        
      </View>

      {/* Titulo Início */}
      <View style={[styles.inicio, styles.inicioFlexBox]}>
        <Text style={[styles.cadastreSe1, styles.faaLoginTypo1]}>
          Cadastre-se
        </Text>
        <Text style={[styles.TemCadastro, styles.faaLoginTypo]}>
          Já tem cadastro?
        </Text>
        {/* Botão Faça Login */}
        <Pressable onPress={() => navigation.navigate("LOGIN")}>
          <Text style={[styles.faaLogin, styles.faaLoginTypo]}>
            Faça Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cadastreSe: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: Border.br_5xs,
  },
  
  cadastroFlexBox: {
    paddingVertical: Padding.p_xl,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: Border.br_8xs,
  },
  
  retBorder: {
    borderColor: Color.colorLightgray,
    borderWidth: 2,
    borderRadius: Border.br_8xs,
  },
  
  forms: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 372,
    height: 48,
    paddingHorizontal: 10,
  },

  entrarComOTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  
  //Posição dos nomes
  nomePosition: {
    left: "5%",
    position: "absolute",
  },
  
  nomeTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  
  innerBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
  },

  googleJpegPosition: {
    zIndex: 1,
    position: "absolute",
  },
  
  inicioFlexBox1: {
    flexDirection: "row",
    alignItems: "center",
  },
  
  entrarComOLayout: {
    display: "flex",
    lineHeight: 16,
    alignItems: "center",
  },
  
  ouTypo: {
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
  },

  inicioFlexBox: {
    justifyContent: "center",
    position: "absolute",
  },

  faaLoginTypo1: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    color: Color.colorSienna,
  },

  faaLoginTypo: {
    marginLeft: 4,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    lineHeight: 20,
  },

  efetuarCadastro: {
    lineHeight: 20,
    fontSize: FontSize.size_xl,
  },

  cadastro: {
    left: "25%",
    top: 560,
    backgroundColor: Color.colorForestgreen,
    width: 210,
    justifyContent: "center",
    position: "absolute",
  },

  nome1: {
    color: Color.colorSienna,
    fontSize: FontSize.size_xs,
  },

  nomeInner: {
    borderColor: Color.colorLightgray,
    marginTop: 4,
  },

  nome: {
    top: 241,
  },
  
  email: {
    top: 319,
  },
  
  mnimo6Caracteres: {
    top: 6,
    left: 270,
    fontSize: FontSize.size_5xs,
    width: 100,
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    color: Color.colorSienna,
    textAlign: "left",
  },
  
  senha: {
    top: 397,
  },
  
  entrarComO: {
    textAlign: "right",
    height: 18,
    width: 149,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },

  entrarComOGoogleWrapper: {
    backgroundColor: "rgba(56, 86, 245, 0.92)",
    width: 193,
    height: 40,
    paddingLeft: 16,
    paddingTop: Padding.p_xl,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_xl,
    alignItems: "center",
    overflow: "hidden",
    borderRadius: Border.br_8xs,
    flexDirection: "row",
  },

  googleInner: {
    borderColor: Color.colorWhite,
    zIndex: 0,
  },

  googleJpeg: {
    top: 11,
    left: 21,
    width: 18,
    height: 18,
    borderRadius: Border.br_5xs,
  },
  google1: {
    marginTop: 30,
    left: "42%",
  },
  
  google: {
    top: 131,
    left: 20,
    alignItems: "center",
    position: "absolute",
  },

  cadastreSe1: {
    color: Color.colorSienna,
    textAlign: "left",
    lineHeight: 25,
    fontSize: 24,
  },
  TemCadastro: {
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  faaLogin: {
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  inicio: {
    top: 80,
    width: "48%",
    left: "32%",
    flexWrap: "wrap", //quebra a linha se o espaço for pequeno;
    alignItems: "center",
    flexDirection: "row",
  },
  
});

export default CADASTRESE;
