import React, {useState} from "react";
import { StyleSheet, View, Text, Pressable, Platform, TextInput, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

import { CheckBox } from 'react-native-elements'; //Biblioteca CheckBox;

const LOGIN = () => {
  const navigation = useNavigation(); //Navegação;
  const [checked, setChecked] = useState(false); //CheckBox (ativo ou inativo);

  return (

    <ScrollView style={styles.container}>
      <View style={styles.login}>
        {/* Logo Cacau */}
        <Image style={styles.logo}
          contentFit="cover"
          source={require("../assets/logo-app.png")}
        />

        {/* Titulo e Subtitulo */}
        <Text style={[styles.titulo, styles.tituloPosition]}>
          Acessar
        </Text>
        <Text style={[styles.subtitulo, styles.tituloPosition]}>
          Acessar com o e-mail e senha
        </Text>

        {/* Botão Acessar */}
        <Pressable
          style={[styles.acessar, styles.acessarFlexBox]}
          onPress={() => navigation.navigate("HOME")}
        />
        <Text style={styles.acessarText}>Acessar</Text>

        {/* Botão Cadastrar */}
        <Pressable
          style={[styles.cadastrar, styles.checkboxBorder]}
          onPress={() => navigation.navigate("CADASTRESE")}
        />
        <Text style={[styles.cadastrarText, styles.digiteClr]}>
          Cadastrar
        </Text>

        {/* E-mail */}
        <Text style={[styles.digiteSeuEMail, styles.tipoFont]}>
          Digite seu e-mail
        </Text>
        <TextInput style={[styles.inputEmail, styles.retBorder]}
          placeholder="E-mail"
        />

        {/* Senha */}
        <Text style={[styles.digiteSuaSenha, styles.tipoFont]}>
          Digite sua senha
        </Text>
        <TextInput style={[styles.inputSenha, styles.retBorder]}
          placeholder="Senha"
        />

        {/* CheckBox para Ajustes */}
        <View style={[styles.check]} >
          <CheckBox
          title="Lembrar minha senha"
          checked={checked}
          onPress={() => setChecked(!checked)}
          checkedColor='black'
          textStyle={{
            fontFamily: FontFamily.montserratMedium, 
            fontSize: 11,
            fontWeight: "500", 
            color: Color.colorSienna, 
          }}
          containerStyle={{
            backgroundColor: 'white',
            borderColor: 'transparent'
          }}/>
        </View>

        <Text style={[styles.esqueciMinhaSenha, styles.fontEsqueciSenha]}>
          Esqueci minha senha
        </Text>
        
        <Text style={styles.ouacesseText}>
          Ou acesse com
        </Text>

        {/* Icones - Google e Facebook */}
        <Image
          style={[styles.googleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/google-icon.png")}
        />
        <Image
          style={[styles.facebookIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/facebook-icon.png")}
        />
      </View>
    </ScrollView>
      
  );
};

const styles = StyleSheet.create({
  //
  logo: {
    width: 50,
    height: 50,
    alignItems: "center",
    alignSelf: "center",
    top: 50,
    lineHeight: 20,
  },

  //
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  
  //VERIFICAR ESSA PROPRIEDADE;
  login: {
    width: "100%",
    height: 800,
  },

  //
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "12.03%",
    top: "80%",
    width: 60,
    height: 60,
    position: "absolute",
  },
  /***/
  checkboxBorder: {
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    overflow: "hidden",
    position: "absolute",
  },

  //
  check: {
    width: "54%",
    height: "6.6%",
    top: "41%",
    lineHeight: 20,
  },

  /***/
  digiteClr: {
    color: Color.colorSienna,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  fontEsqueciSenha: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: 11,
    top: "49.2%",
    color: Color.colorSienna,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },

  //
  retBorder: {
    borderColor: Color.colorLightgray,
    backgroundColor: Color.colorWhitesmoke_100,
    width: "91.67%",
    height: "6%",
    borderWidth: 2,
    left: "4.17%",
    borderRadius: Border.br_8xs,
    right: "4.17%",
    position: "absolute",
  },
  
  //
  tipoFont: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },

  //
  tituloPosition: {
    left: "5.28%",
    color: Color.colorSienna,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },

  //
  googleIcon: {
    right: "55.14%",
    left: "30.97%",
  },
  facebookIcon: {
    right: "30.69%",
    left: "55.42%",
  },

  //
  ouacesseText: {
    top: "74.22%",
    left: "38.89%",
    fontWeight: "400",
    fontFamily: FontFamily.montserratLight,
    color: Color.colorBlack,
    textAlign: "center",
    lineHeight: 20,
    fontSize: 12,
    position: "absolute",
  },
  
  //
  acessar: {
    left: "52.78%",
    backgroundColor: Color.colorSienna,
    alignItems: "center",
    borderRadius: Border.br_8xs,
    right: "4.17%",
    justifyContent: "center",
    bottom: "31.41%",
    top: "60.63%",
    width: "43.06%",
    height: "7.97%",
    overflow: "hidden",
    position: "absolute",
  },

  //
  acessarText: {
    left: "65%",
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    top: "63.5%",
    lineHeight: 20,
    position: "absolute",
  },

  //
  cadastrar: {
    right: "52.78%",
    borderColor: Color.colorSienna,
    left: "4.17%",
    alignItems: "center",
    justifyContent: "center",
    bottom: "31.41%",
    top: "60.63%",
    width: "43.06%",
    height: "7.97%",
    borderWidth: 1,
  },
  
  //
  cadastrarText: {
    left: "14%",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    top: "63.5%",
    color: Color.colorSienna,
  },

  esqueciMinhaSenha: {
    width: "33.33%",
    left: "62.5%",
    display: "flex",
    alignItems: "center",
  },

  //
  inputSenha: {
    top: "41.72%",
    bottom: "52.97%",
    paddingHorizontal: 10,
  },

  //
  inputEmail: {
    top: "31.09%",
    bottom: "63.59%",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  //
  digiteSuaSenha: {
    top: "38.44%",
    color: Color.colorSienna,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
    left: "4.17%",
  },

  //
  digiteSeuEMail: {
    top: "27.81%",
    color: Color.colorSienna,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
    left: "4.17%",
  },

  //
  subtitulo: {
    top: "20%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  //
  titulo: {
    top: "16%",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "500",
    fontSize: 20,
  },
  
});

export default LOGIN;

/*
<KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      
      <View style={styles.login}>

        <Image
          style={[styles.googleIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/google-icon.png")}
        />
        <Image
          style={[styles.facebookIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/facebook-icon.png")}
        />

        <Text style={styles.ouAcesseCom}>Ou acesse com</Text>
        
      
        <Pressable
          style={[styles.acessar, styles.acessarFlexBox]}
          onPress={() => navigation.navigate("HOME")}
        />
        <Text style={styles.acessar1}>Acessar</Text>

        <Pressable
          style={[styles.cadastrar, styles.checkboxBorder]}
          onPress={() => navigation.navigate("CADASTRESE")}
        />
        <Text style={[styles.cadastrar1, styles.digiteClr]}>Cadastrar</Text>

        <View style={styles.check} >
          <CheckBox
          title='Lembrar minha senha'
          checked={checked}
          onPress={() => setChecked(!checked)}
          />
        </View>

        <Text style={[styles.esqueciMinhaSenha, styles.minhaTypo]}>
          Esqueci minha senha
        </Text>

        <Text style={[styles.digiteSuaSenha, styles.digiteTypo]}>
          Digite sua senha
        </Text>
        <TextInput style={[styles.inputSenha, styles.retBorder]}
          placeholder="Senha"
        />

        <Text style={[styles.digiteSeuEMail, styles.digiteTypo]}>
          Digite seu e-mail
        </Text>
        <TextInput style={[styles.inputEmail, styles.retBorder]}
          placeholder="E-mail"
        />

        <Text style={[styles.acessarComO, styles.acessarPosition]}>
          Acessar com o e-mail e senha
        </Text>

        <Text style={[styles.acessar2, styles.acessarPosition]}>Acessar</Text>
      
      </View>
      
    
</KeyboardAvoidingView> 
*/