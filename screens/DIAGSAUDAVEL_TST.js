import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

import ExibeImagem from "../componentes/ExibeImagem";
import ComponenteDeExibicao from "../componentes/ExibePredict";

import { useRoute } from "@react-navigation/native";

//import {PredictionItem} from "../api/PredictionItem";

const DIAGSAUDAVEL_TST = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const img_select = route.params?.capturedImage; //Recebe a URI da imagem selecionada da galera ou capturada e atribui a var img_select;
  let {respostaAPI} = route.params;

  console.log('Uri no DiagSaudavel: ', img_select);
  console.log('Valor Predict - DIAGSAUDAVEL: ', respostaAPI);

  return (
    <ScrollView style={styles.containerscrol}>
      <ComponenteDeExibicao predictions={respostaAPI} />
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
            {/* 
            <View style={[styles.linha4, styles.linhaBorder]} />
            <Text style={[styles.cuidadosEPrecaues, styles.imagemCapturadaTypo]}>
              Cuidados e Precauções
            </Text>
            */}

            {/* SOBRE O CACAU */}
            <View style={[styles.SobreTodoViewCacau, styles.imagemCapturadaPosition]}>
              <Text style={[styles.textSobreoCacau, styles.tipoFontSobreCacau]}>
                O cacau capturado apresenta uma casca saudável e brilhante e
                consistente, livre de manchas ou deformidades. Sua cor varia
                conforme o estágio de maturação, indo de verde a tons
                amarelo/vermelho intensos. A forma simétrica e uniforme indica um
                desenvolvimento adequado, enquanto a textura da casca, firme e sem
                rugosidades excessivas, sugere frescor e saúde.
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
                source={require("../assets/desenho-cacau-saudavek1.png")}
              />
              <Text style={[styles.saudvel2, styles.saudvelTypo]}>Saudável</Text>
              <Text style={[styles.resultTextoPorcentagem]}>
                TESTE
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
    marginLeft: 4,
    fontSize: FontSize.size_8xs,
    textAlign: "left",
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
    fontSize: 24,
    color: Color.colorLimegreen,
    left: "7%",
    position: "absolute",
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
    left: "0.33%",
    top: "60%",
    fontSize: FontSize.size_base,
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },

  resultadoDaAnlise: {
    height: 116,
    width: 400,
  },
});

export default DIAGSAUDAVEL_TST;