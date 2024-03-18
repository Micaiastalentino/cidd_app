import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

import ExibeImagem from "../componentes/ExibeImagem";

import { useRoute } from "@react-navigation/native";

const DIAGSAUDAVEL_TST = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const img_select = route.params?.capturedImage; //Recebe a URI da imagem selecionada da galera ou capturada e atribui a var img_select;
  const {respostaAPI} = route.params; //Recebe o resultado da predição;

  // Calcula a classe com a maior confiança
  const maxConfidenceClass = Object.keys(respostaAPI).reduce((a, b) => respostaAPI[a] > respostaAPI[b] ? a : b);
  // Calcula o total de confiança para normalização
  const totalConfidence = Object.values(respostaAPI).reduce((acc, confidence) => acc + confidence, 0);
  // Calcula a porcentagem da classe com maior confiança
  const maxConfidencePercentage = (respostaAPI[maxConfidenceClass] / totalConfidence * 100).toFixed(2);

  console.log('Uri no DiagSaudavel: ', img_select);
  console.log('Predição - DIAGSAUDAVEL: ', respostaAPI);

  // Texto sobre o cacau com base na classe com maior confiança
  let textoSobreCacau = '';
  let textoCuidadosCacau = '';
  let classified = '';
  let imagem;
  switch (maxConfidenceClass) {
    case 'Classe 0': //Saudável;
      classified = 'Fruto Saudável';
      textoSobreCacau = 'O cacau capturado apresenta uma casca saudável e brilhante e consistente, livre de manchas ou deformidades. Sua cor varia conforme o estágio de maturação, indo de verde a tons amarelo/vermelho intensos. A forma simétrica e uniforme indica um desenvolvimento adequado, enquanto a textura da casca, firme e sem rugosidades excessivas, sugere frescor e saúde.';
      textoCuidadosCacau = 'O fruto diagnosticado apresenta um resultado satisfatório, nesse sentido, a planta está sendo preservada utilizando boas práticas agrícolas, como irrigação adequada, controle de pragas e doenças, e manejo adequado do solo, contribuindo para a saúde geral dos seus frutos.';
      imagem = require("../assets/desenho-cacau-saudavek1.png");
      break;
    case 'Classe 1': //Podridão Parda;
      classified = 'Podridão Parda';
      textoSobreCacau = 'O cacau capturado apresenta sintomas típicos da doença Podridão Parda, apresentando manchas escuras e enrugadas na superfície, essas manchas eventualmente se expandem e se tornam marrons, com uma textura amolecida e podre. A podridão parda pode se espalhar rapidamente em condições favoráveis, como alta umidade e temperatura. Além de danificar os frutos, a doença pode reduzir a qualidade e o rendimento das colheitas de cacau.';
      textoCuidadosCacau = 'Remova os frutos afetados assim que forem detectados e destrua-os para evitar a propagação da doença. Mantenha o local limpo, remova restos de plantas e mantenha a área ao redor das árvores de cacau livre de ervas daninhas para reduzir a umidade e minimizar as condições favoráveis ao fungo. Inspecione regularmente as plantas em busca de sintomas da doença para detectar e tratar precocemente os focos de infecção.';
      imagem = require("../assets/desenho-cacau-doente.png");
      break;
    case 'Classe 2': //Broca da Vagem;
      classified = 'Broca da Vagem';
      textoSobreCacau = 'O fruto apresenta sintomas da doença Broca da Vagem (Ceratoma cacaofunesta) que incluem a presença de pequenos orifícios na casca do fruto, indicando a entrada da praga. Além disso, pode haver a presença de excrementos e teias produzidas pelas larvas da broca. As larvas se alimentam do interior da vagem, causando danos significativos à qualidade e ao rendimento da produção de cacau.';
      textoCuidadosCacau = 'Inspecione frequentemente as vagens para detectar sinais de infestação, como pequenos orifícios e excrementos. Colher os frutos maduros assim que estiverem prontos, evitando deixá-los na árvore por muito tempo, pois isso pode aumentar o risco de infestação. Manter uma cobertura adequada de sombra sobre as árvores de cacau, pois a luz direta pode reduzir a incidência da broca da vagem. Estas medidas podem ajudar no combate a doença Broca da Vagem.';
      imagem = require("../assets/desenho-cacau-doente-vagemk1.png");
      break;
    default:
      textoSobreCacau = 'Informações gerais sobre o cacau';
      textoCuidadosCacau = 'Cuidados gerais com o cacau';
  }

  return (
    <ScrollView style={styles.containerscrol}>
      <View style={styles.contPrincipal}>
        <View style={styles.diagnstico}>
          <View style={[styles.detalhesDaAnlise, styles.diagnsticoChildPosition]}>
            
            {/* ANALISE GRÁFICA */}
            <View style={styles.viewAnaliseGrafica}>
              <View style={[styles.linha03, styles.linhaBorder]} />
              <Text style={[styles.textAnaliseGrafica]}>
                Análise Gráfica
              </Text>
            </View>

            {/* CUIDADOS E PRECAUÇÕES */} 
            
            <View style={[styles.linha4, styles.linhaBorder]} />
            <Text style={[styles.cuidadosEPrecaues, styles.imagemCapturadaTypo]}>
              {textoCuidadosCacau}
            </Text>
            <Text style={[styles.cuidadosEPrecaues, styles.imagemCapturadaTypo]}>
              Cuidados e Precauções
            </Text>

            {/* SOBRE O CACAU */}
            <View style={[styles.SobreTodoViewCacau, styles.imagemCapturadaPosition]}>
              <Text style={[styles.textSobreoCacau, styles.tipoFontSobreCacau]}>
                {textoSobreCacau}
              </Text>
              <View style={[styles.linha03, styles.linhaBorder]} />
              <Text style={[styles.titSobreCacau, styles.cacauFlexBox]}>
                Sobre o cacau
              </Text>
            </View>
            
            {/* LEGENDAS */} 
            {/* 
            <View style={styles.legenda}>
              <View style={styles.legenda1Position}>
                <View style={styles.rectangleParent}>
                  <View style={styles.frameChild} />
                  <Text style={[styles.saudvel1, styles.saudvel1Typo]}>
                    Saudável
                  </Text>
                </View>
                <View style={styles.rectangleGroup}>
                  <View style={styles.frameItem} />
                  <Text style={[styles.podridoParda, styles.saudvel1Typo]}>
                    Podridão Parda
                  </Text>
                </View>
              </View>
            </View>
            */}

            {/* Exibe a imagem capturada*/}  
            <View style={styles.cacau}>
              {/* Componente ExibeImagem */}
              <ExibeImagem capturedImage={img_select} /> 
            </View>
            <View style={[styles.linha2, styles.linhaBorder]} />
            <Text style={[styles.imagemCapturada, styles.imagemCapturadaPosition]}>
              Imagem capturada
            </Text>
          </View>
          
          {/*EDITADA*/}
          <View style={[styles.resultadoDaAnlise, styles.legenda1Position]}>
            <Image
              style={styles.resultadoDaAnliseChild} //RETANGULO MENOR
              contentFit="cover"
              source={require("../assets/rectangle-2.png")}
            />

            {/* RESULTADO DA ANALISE; */}
            <View style={styles.resultadoTxI}>
              <Image
                style={[styles.desenhoCacauSaudavek, styles.dashboardIconLayout]}
                contentFit="cover"
                source={imagem}
              />
              <Text style={[styles.saudvel2, styles.saudvelTypo]}>{classified}</Text>
              <Text style={[styles.resultTextoPorcentagem]}>
                {`(${maxConfidencePercentage}% de precisão)`}
              </Text>
            </View>
            <Text style={[styles.resultAnalise]}>
              Resultado da análise:
            </Text>

          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerscrol: {
    flex: 1,
    backgroundColor: "white"
  },
  
  diagnstico: {
    top: 49,
    left: 14,
    height: 1080,
    width: 200,
    position: "absolute",
  },
  
  contPrincipal: {
    backgroundColor: Color.colorWhite,
    height: 1800,
    width: "100%",
  },

  detalhesDaAnlise: {
    height: 1600,
  },

  diagnsticoChildPosition: {
    top: 127,
    left: 0,
    width: "185%",
    borderRadius: Border.br_3xs,
    borderWidth: 1, // largura da borda
    borderColor: Color.colorDarkgray, // cor da borda
    position: "absolute",
  },
  dashboardIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  saudvelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  textTypo: {
    height: "29.63%",
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_4xs,
    position: "absolute",
  },
  linhaBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    position: "absolute",
  },
  imagemCapturadaTypo: {
    height: "1.91%",
    alignItems: "center",
    display: "flex",
    color: Color.colorSienna,
    lineHeight: 13,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  imagemCapturadaPosition: {
    left: "6.02%",
    position: "absolute",
  },
  
  saudvel1Typo: {
    marginLeft: 0,
    fontSize: FontSize.size_8xs,
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  cacauSaudvelIconPosition: {
    zIndex: 1,
    position: "absolute",
  },

  legenda1Position: {
    top: 0,
    left: 0,
    position: "absolute",
  },

  linha03: {
    width: 335,
    top: 20,
    left: 0,
  },
  
  textAnaliseGrafica: {
    height: "15%",
    alignItems: "center",
    color: Color.colorSienna,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    top: "0%",
    position: "absolute",
    lineHeight: 14,
    fontSize: 14,
    left: "0.48%",
    width: "99.52%",
  },

  //View Analise Grafica;
  viewAnaliseGrafica: {
    top: 660,
    width: 291,
    height: 196,
    left: 20,
    position: "absolute",
  },

  linha4: {
    top: 820,
    left: 25,
    width: 266,
  },
  cuidadosEPrecaues: {
    width: "87.11%",
    top: "84.89%",
    left: "8.07%",
    position: "absolute",
  },

  //Sobre o cacau;
  tipoFontSobreCacau: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.colorSienna,
    fontSize: 12,
    lineHeight: 17,
    position: "absolute",
  },
  textSobreoCacau: {
    height: "120%",
    top: "20.71%",
    textAlign: "justify",
    alignItems: "center",
    display: "flex",
    left: "0.5%",
    width: "103%",
    fontWeight: "500",
  },
  titSobreCacau: {
    height: "12.86%",
    alignItems: "center",
    color: Color.colorSienna,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    top: "0%",
    position: "absolute",
    lineHeight: 13,
    fontSize: 14,
    left: "0.48%",
    width: "99.52%",
  },
  //View Sobre o Cacau;
  SobreTodoViewCacau: {
    height: "14.89%",
    width: "87.53%",
    top: "25%",
    right: "6.45%",
    bottom: "43.3%",
  },

  frameChild: {
    backgroundColor: Color.colorLimegreen,
    height: 10,
    width: 10,
  },
  saudvel1: {
    color: Color.colorLimegreen,
  },
  rectangleParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameItem: {
    backgroundColor: Color.colorMediumslateblue_100,
    height: 9,
    width: 10,
  },
  podridoParda: {
    color: Color.colorMediumslateblue_100,
  },
  rectangleGroup: {
    marginTop: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  legenda: {
    top: 746,
    left: 28,
    width: 55,
    height: 22,
    position: "absolute",
  },
  cacauSaudvelIcon: {
    left: 29,
    width: 213,
    height: 276,
    top: 22,
    borderRadius: Border.br_3xs,
  },
  cacau: {
    top: 54,
    left: 30,
    flexDirection: "row",
    position: "absolute",
  },
  linha2: {
    top: 38,
    width: 335,
    left: 20,
  },
  imagemCapturada: {
    width: "100%",
    height: "100%",
    top: "1%",
    alignItems: "center",
    color: Color.colorSienna,
    fontSize: 14,
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },

  resultadoDaAnliseChild: {
    height: 110,
    borderRadius: Border.br_3xs,
    borderWidth: 1, // largura da borda
    borderColor: Color.colorDarkgray, // cor da borda
    width: "92.5%",
    position: "absolute",
  },
  
  desenhoCacauSaudavek: {
    width: "34.5%",
    right: "0.05%",
    left: "65.46%",
  },

  saudvel2: {
    height: "52%",
    width: "65.32%",
    fontSize: 20,
    color: '#006400',
    left: "0%",
    position: "absolute",
    textAlign: "center",
  },

  dePreciso: {
    height: "29",
    width: "50.57%",
    top: "66.1%",
    left: "1.95%",
    textAlign: "center",
    color: 'red',
  },

  resultadoTxI: {
    height: "50.86%",
    width: "66.36%",
    top: "20%",
    right: "17.83%",
    left: "15.81%",
    position: "absolute",
  },

  resultAnalise: {
    width: "99.37%",
    left: "0.33%",
    top: "-25%",
    fontSize: FontSize.size_base,
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },

  resultTextoPorcentagem: {
    width: "99.37%",
    right: "-2%",
    top: "60%",
    fontSize: 13,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "bold",
    color: Color.colorSienna,
  },

  resultadoDaAnlise: {
    height: 116,
    width: 400,
  },
});

export default DIAGSAUDAVEL_TST;