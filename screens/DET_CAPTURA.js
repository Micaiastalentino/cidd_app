import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import CAPTURA from "./CAPTURA";
import ViewImage from "../components/ViewImage/ViewImage"; //Componente

const DET_CAPTURA = ({ route }) => {
  const { selectedItem } = route.params;
  
  // Agora você pode acessar os dados do item selecionado, por exemplo:
  const {classifi, classeMaiorPorcentagem, textoSobreCacau, img_cam, iconeClass, textoCuidadosCacau, valores} = selectedItem;

  return (
    <ScrollView style={styles.containerScrol}>
      <View style={styles.contPrim}>
        {/* RESULTADO DA ANALISE */}
        <Text style={[styles.title]}>
          Resultado da Análise:
        </Text>
        <View style={styles.retResult}>
          <View style={styles.conteinerResult}>
            <View style={styles.alinhResult}>
              <Text style={[styles.tituloClassified]}>
                {classifi}
              </Text>
              <Text style={[styles.resultTextoPorcentagem]}>
                {classeMaiorPorcentagem}% de precisão
              </Text>
            </View>
            {valores === 1 ?(
              <Image
                resizeMode="cover"
                source={require("../assets/images/desenho-cacau-doentek1.png")}
                style={styles.iconImgCacau}
              />
            ) : valores === 2 ?(
              <Image
                resizeMode="cover"
                source={require("../assets/images/desenho-cacau-doente-vagemk1.png")}
                style={styles.iconImgCacau}
              />
            ):
              <Image
                resizeMode="cover"
                source={require("../assets/images/desenho-cacau-saudavek1.png")}
                style={styles.iconImgCacau}
              />
            }
          </View>
        </View>

        <View style={styles.contSec}>
          <View style={styles.conteiner}>
            {/* Exibe a imagem capturada*/} 
            <Text style={[styles.title]}>
              Imagem Capturada
            </Text>
            <View style={[styles.linha, styles.linhaBorder]} />
            <TouchableOpacity>
              {/* Componente ExibeImagem */}
              <ViewImage capturedImage={img_cam} /> 
            </TouchableOpacity>
          </View>
        
          {/* SOBRE O CACAU */}
          <View style={styles.conteiner}>
            <Text style={[styles.title]}>
              Sobre o Cacau
            </Text>
            <View style={[styles.linha, styles.linhaBorder]} />
            <Text style={[styles.text]}>
              {textoSobreCacau}
            </Text>
          </View>

          {/* CUIDADOS E PRECAUÇÕES */}
          <View style={styles.conteiner}>
            <Text style={[styles.title]}>
              Cuidados e Precauções
            </Text>
            <View style={[styles.linha, styles.linhaBorder]} />
            <Text style={[styles.text]}>
              {textoCuidadosCacau}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerScrol: {
    flex: 1,
  },
  contPrim: {
    padding: 15,
    backgroundColor: 'white',
    height: "auto", //ALTURA DA TELA
    //backgroundColor: 'yellow',
  },
  contSec: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    borderWidth: 1, // LARGURA DA BORDA
    borderColor: Color.colorDarkgray, // COR DA BORDA
    height: 1120, //ALTURA DA TELA
    padding: 15,
    marginTop: 15,
    //backgroundColor: 'yellow',
  },
  conteiner:{
    marginBottom: 30,
    //backgroundColor: 'yellow',
  },
  conteinerResult:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    //backgroundColor: 'yellow',
  },
  retResult:{
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    borderWidth: 1, // LARGURA DA BORDA
    borderColor: Color.colorDarkgray, // COR DA BORDA
    height: 130, //ALTURA DA TELA
    padding: 10,
    alignItems: 'center'
  },
  alinhResult:{
    alignItems: 'left'
  },
  linha: {
    width: '100%',
    marginBottom: 10,
  },
  linhaBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
  },
  //TEXTOS
  text: {
    fontFamily: FontFamily.montserratMedium,
    fontSize: 14,
    textAlign: 'justify',
    color: Color.colorSienna,
    lineHeight: 20,
    fontWeight: "500",
  },
  //TITULO CLASSIFICAÇÃO
  tituloClassified: {
    color: '#006400',
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: 22,
  },
  //TEXTO PORCENTAGEM;
  resultTextoPorcentagem: {
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorSienna,
    fontWeight: "bold",
    fontSize: 13,
  },
  //ICON CACAU IMAGEM;
  iconImgCacau: {
    width: 120,
    height: 80,
  },
  title: {
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default DET_CAPTURA;
