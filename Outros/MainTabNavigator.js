import React, {useState} from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const HISTORICO_CLASS = ({route}) => {
  const navigation = useNavigation();
  const valor = route.params?.valor;
  console.log(valor);

  // Texto sobre o cacau com base na classe com maior confiança
  let textoHistorico = '';
  let textoCaract = '';
  let textFungos = '';
  let imagem;

  //Variáveis dinâmicas;
  switch (valor) {
    case 0: //Saudável;
      textoHistorico = 'O cacau capturado apresenta uma casca saudável e brilhante e consistente, livre de manchas ou deformidades. Sua cor varia conforme o estágio de maturação, indo de verde a tons amarelo/vermelho intensos. A forma simétrica e uniforme indica um desenvolvimento adequado, enquanto a textura da casca, firme e sem rugosidades excessivas, sugere frescor e saúde.';
      textoCaract = 'O fruto diagnosticado apresenta um resultado satisfatório, nesse sentido, a planta está sendo preservada utilizando boas práticas agrícolas, como irrigação adequada, controle de pragas e doenças, e manejo adequado do solo, contribuindo para a saúde geral dos seus frutos.';
      break;
    case 1: //Podridão Parda;
      textoHistorico = 'A podridão parda, também conhecida como Monilíase do Cacau, é uma doença fúngica que afeta as plantações de cacau em todo o mundo. Ela é causada pelo fungo Moniliophthora roreri e é uma das doenças mais devastadoras enfrentadas pelos produtores de cacau. O fungo Moniliophthora roreri foi descoberto pela primeira vez na região amazônica da América do Sul na década de 1930. Desde então, a doença se espalhou para outras regiões produtoras de cacau, como América Central, Caribe, África e algumas partes da Ásia.';
      textoCaract = 'Pequenas lesões de cor castanha aparecem no fruto e de 3 a 5 dias após o surgimento, nota-se uma camada esbranquiçada (tipo pó) sobre a lesão. Com 10 a 15 dias esta doença pode atingir toda a superfície do fruto, com um cheiro característico de peixe.';
      textFungos = 'Doença do cacaueiro - Podridão Parda\n\nCulturas: Cacau;\nTipo de patógeno: fungo;\nNome comum: Podridão Parda;\nAgente causal: Phytophthora spp.'
      imagem = require('../assets/images/podridao-parda.png')
      break;
    case 2: //Vassoura-de-Bruxa;
      textoHistorico = 'A doença vassoura-de-bruxa remonta ao século XIX, quando foi relatada pela primeira vez no Brasil, na região da Amazônia. No entanto, ela se espalhou para outras regiões produtoras de cacau, como África e Ásia, ao longo do século XX. Umas das principais doenças do cacau, responsável por causar danos significativos às plantações, resultando na morte dos brotos e na formação de estruturas semelhantes a vassouras nas partes afetadas da planta. Isso leva a uma diminuição drástica na produção de cacau, afetando negativamente a economia das regiões produtoras.';
      textoCaract = 'A vassoura-de-bruxa é uma doença causada pelo fungo Moniliophthora perniciosa, que provoca deformação, apodrecimento e morte de cacaueiros e cupuaçuzeiros. Os sintomas da enfermidade são folhas e galhos secos, que deixam as plantas semelhantes a uma vassoura velha, daí o nome popular da praga. O fungo altera o equilíbrio hormonal da planta, levando ao crescimento excessivo dos tecidos infectados de forma semelhante a um câncer. Por essa razão, a vassoura-de-bruxa debilita e leva à queda na produtividade dos cacaueiros.'
      textFungos = 'Doença do cacaueiro - Vassoura-de-Bruxa\n\nCulturas: Cacau;\nTipo de patógeno: fungo;\nNome comum: Vassoura-de-Bruxa;\nAgente causal: Moniliophthora perniciosa.'
      imagem = require('../assets/images/vassoura-de-bruxa.png')
      break;
    default:
      textoHistorico = 'Informações gerais sobre o cacau';
      textoCaract = 'Cuidados gerais com o cacau';
  }
  return (
    <ScrollView style={styles.containerScrol}>
      <View style={styles.contPrincipal}>
        <View style={styles.contSecundario}>
          <Image
            style={[styles.img]}
            contentFit="cover"
            source={imagem}
          />
          <View style={[styles.contRet]}>
            {/* Características */} 
            <View style={[styles.linha4, styles.linhaBorder]} />
            <Text style={[styles.txtFungos]}>
              {textFungos}
            </Text>
            <Text style={[styles.textCaract, styles.tipoFont]}>
              {textoCaract}
            </Text>
            <Text style={[styles.titCaract, styles.tipoTituloPadrao]}>
              Características
            </Text>

            {/* HISTORICO */}
            <View style={[styles.linha3, styles.linhaBorder]} />
            <Text style={[styles.textHistorico, styles.tipoFont]}>
              {textoHistorico}
            </Text>
            <Text style={[styles.titHistorico, styles.tipoTituloPadrao]}>
              Histórico
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
  
  img:{
    width: '100%',
    height: '25%',
    position: 'absolute',
    backgroundColor: 'green',
  },

  contSecundario: {
    marginStart: "2%",
    width: "50%",
    position: "absolute",
  },
  
  contPrincipal: {
    backgroundColor: Color.colorWhite,
    height: 1000, //ALTURA DA TELA
    width: "100%", //LARGURA DA TELA
    //backgroundColor: 'yellow'
  },

  //CONTAINER PRINCIPAL LINHA;
  contRet: {
    flex: 1,
    backgroundColor: 'white',
    top: 10,
    width: "185%",
    height: 1000,
    borderRadius: Border.br_3xs,
    borderWidth: 1, // largura da borda
    borderColor: Color.colorDarkgray, // cor da borda
    position: "absolute",
  },

  /// TITULO CARACTERÍSTICAS
  titCaract: {
    height: 'auto',
    width: 'auto',
    top: "32.5%",
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
    fontSize: 16,
    //backgroundColor: 'yellow'
  },
  //TEXTO CARACTERÍSTICAS
  textCaract: {
    top: "35%",
    width: "100%",
    textAlign: "justify",
    position: "relative",
    //backgroundColor: 'yellow'
  },

  /// TEXTO FUNGOS
  txtFungos: {
    height: "auto",
    width: "auto",
    top: "62%",
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratMedium,
    position: "relative",
    fontSize: 14,
    lineHeight: 19,
    padding: 10,
    backgroundColor: 'blue'
  },

  //BORDA DAs LINHAs
  linhaBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    position: "absolute",
  },
  //LINHAS
  linha3: {
    top: 40,
    width: '100%',
  },
  linha4: {
    top: "35%",
    width: '100%',
  },
  //PADRAO DE FONTE TITULO
  tipoTituloPadrao:{
    marginLeft: "2%",
  },
  //PADRÃO DE FONTE TEXTOS
  tipoFont: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.colorSienna,
    fontSize: 14,
    lineHeight: 19,
    position: "absolute",
    flexDirection: "row",
    padding: 10,
    //backgroundColor: 'yellow'
  },
  
  //HISTORICO
  textHistorico: {
    width: '100%',
    height: 'auto',
    marginTop: 40,
    textAlign: "justify",
    //backgroundColor: 'yellow'
  },
  titHistorico: {
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
    fontSize: 16,
    width: 'auto',
    height: 'auto',
    marginTop: 15,
    //backgroundColor: 'yellow'
  },
});

export default HISTORICO_CLASS;