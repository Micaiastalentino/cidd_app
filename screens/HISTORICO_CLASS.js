import React, {useState} from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const HISTORICO_CLASS = ({route}) => {
  const navigation = useNavigation();
  const valor = route.params?.valor;

  // Texto sobre o cacau
  let textoHistorico = '';
  let textoCaract = '';
  let imagem;

  //Variáveis dinâmicas;
  switch (valor) {
    case 1: //Podridão Parda;
      textoHistorico = 'A podridão parda, também conhecida como Monilíase do Cacau, é uma doença fúngica que afeta as plantações de cacau em todo o mundo. Ela é causada pelo fungo Moniliophthora roreri e é uma das doenças mais devastadoras enfrentadas pelos produtores de cacau. O fungo Moniliophthora roreri foi descoberto pela primeira vez na região amazônica da América do Sul na década de 1930. Desde então, a doença se espalhou para outras regiões produtoras de cacau, como América Central, Caribe, África e algumas partes da Ásia.\n';
      textoCaract = 'Pequenas lesões de cor castanha, inicialmente imperceptíveis, começam a surgir no fruto. Após 3 a 5 dias, tornam-se visíveis, acompanhadas por uma camada esbranquiçada semelhante a pó sobre a área afetada. Com o passar do tempo, geralmente de 10 a 15 dias, a doença se espalha, cobrindo toda a superfície do fruto. Além disso, o fruto desenvolve um cheiro característico de peixe conforme a doença progride.\n\nDoença do cacaueiro - Podridão Parda\nCulturas: Cacau;\nTipo de patógeno: fungo;\nNome comum: Podridão Parda;\nAgente causal: Phytophthora spp.\n'
      imagem = require('../assets/images/podridao-parda.png')
      break;
    case 2: //Vassoura-de-Bruxa;
      textoHistorico = 'A doença vassoura-de-bruxa remonta ao século XIX, quando foi relatada pela primeira vez no Brasil, na região da Amazônia. No entanto, ela se espalhou para outras regiões produtoras de cacau, como África e Ásia, ao longo do século XX. Umas das principais doenças do cacau, responsável por causar danos significativos às plantações, resultando na morte dos brotos e na formação de estruturas semelhantes a vassouras nas partes afetadas da planta. Isso leva a uma diminuição drástica na produção de cacau, afetando negativamente a economia das regiões produtoras.'
      textoCaract = 'A vassoura-de-bruxa é uma doença causada pelo fungo Moniliophthora perniciosa, que provoca deformação, apodrecimento e morte de cacaueiros e cupuaçuzeiros. Os sintomas da enfermidade são folhas e galhos secos, que deixam as plantas semelhantes a uma vassoura velha, daí o nome popular da praga. O fungo altera o equilíbrio hormonal da planta, levando ao crescimento excessivo dos tecidos infectados de forma semelhante a um câncer. Por essa razão, a vassoura-de-bruxa debilita e leva à queda na produtividade dos cacaueiros.\n\nDoença do cacaueiro - Vassoura-de-Bruxa\nCulturas: Cacau;\nTipo de patógeno: fungo;\nNome comum: Vassoura-de-Bruxa;\nAgente causal: Moniliophthora perniciosa.\n'
      imagem = require('../assets/images/vassoura-de-bruxa.png')
      break;
    default:
  }
  return (
    <ScrollView style={styles.containerScroll}>
      <Image
        style={[styles.img]}
        contentFit="cover"
        source={imagem}
      />
      <View style={styles.containerPrim}>
        <View style={styles.containerSec}>
          <View style={styles.content}>
            <Text style={styles.title}>Histórico</Text>
            <View style={[styles.linha, styles.linhaBorder]} />
            <Text style={styles.text}>{textoHistorico}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Características</Text>
            <View style={[styles.linha, styles.linhaBorder]} />
            <Text style={styles.text}>{textoCaract}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Quão preciso é este aplicativo?</Text>
            <View style={[styles.linha, styles.linhaBorder]} />
            <Text style={styles.text}>
              Este aplicativo, equipado com um modelo de inteligência artificial, 
              demonstra uma precisão considerável na classificação de frutos de 
              cacau como saudáveis, doentes por podridão parda ou afetados pela 
              vassoura de bruxa. Com uma acurácia geral de 89%, o modelo é capaz 
              de identificar corretamente a condição de aproximadamente 89% dos 
              frutos de cacau. Isso indica uma eficácia notável na distinção entre
              diferentes estados de saúde dos frutos
            </Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerScroll: {
    flex: 1,
  },
  containerPrim: {
    padding: 15,
    backgroundColor: 'white',
    height: 1450, //ALTURA DA TELA
  },
  containerSec: {
    padding: 15,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    borderWidth: 1, // LARGURA DA BORDA
    borderColor: Color.colorDarkgray, // COR DA BORDA
    height: 1210, //ALTURA DA TELA
  },
  content: {
    marginBottom: 5,
  },
  img:{
    width: '100%',
    height: '15%',
    backgroundColor: 'blue'
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
  title: {
    fontFamily: FontFamily.montserratBold,
    fontSize: 16,
    color: Color.colorSienna,
    marginBottom: 5,
  },
  text: {
    fontFamily: FontFamily.montserratMedium,
    fontSize: 14,
    textAlign: 'justify',
    color: Color.colorSienna,
    lineHeight: 20,
    fontWeight: "500",
  },
  fungus: {
    fontFamily: FontFamily.montserratMedium,
    fontSize: 14,
    color: Color.colorSienna,
    lineHeight: 20,
    padding: 10,
  },
});

export default HISTORICO_CLASS;