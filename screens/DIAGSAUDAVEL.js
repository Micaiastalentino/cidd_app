import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

import ExibeImagem from "../componentes/ExibeImagem";
import { useRoute } from "@react-navigation/native";

const DIAGSAUDAVEL = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.containerscrol}>
      
      <View style={styles.contPrincipal}>
        <View style={styles.diagnstico}>
          <Image
            style={[styles.diagnsticoChild, styles.diagnsticoChildPosition]} //RETANGULO MAIOR
            contentFit="cover"
            source={require("../assets/rectangle-3.png")}
          />
          <View style={[styles.detalhesDaAnlise, styles.diagnsticoChildPosition]}>
            <View style={styles.grficoPizza}>
              <View style={styles.grficoDeRosca}>
                <Image
                  style={[styles.dashboardIcon, styles.dashboardIconLayout]}
                  contentFit="cover"
                  source={require("../assets/dashboard.png")}
                />
                <View style={styles.textos}>
                  <Text style={[styles.vassDeBruxa, styles.saudvelTypo]}>
                    Vass. de Bruxa
                  </Text>
                  <Text style={[styles.saudvel, styles.saudvelTypo]}>
                    Saudável
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>35%</Text>
                  <Text style={[styles.text1, styles.textTypo]}>90%</Text>
                </View>
              </View>
              <View style={[styles.linha03, styles.linhaBorder]} />
              <Text style={[styles.anliseGrfica, styles.cacauFlexBox]}>
                Análise Gráfica
              </Text>
            </View>
            <View style={[styles.linha4, styles.linhaBorder]} />
            <Text style={[styles.cuidadosEPrecaues, styles.imagemCapturadaTypo]}>
              Cuidados e Precauções
            </Text>
            <View
              style={[styles.detalhesDoResultado, styles.imagemCapturadaPosition]}
            >
              <Text style={[styles.oCacauCapturado, styles.dePrecisoTypo]}>
                O cacau capturado apresenta uma casca saudável e brilhante e
                consistente, livre de manchas ou deformidades. Sua cor varia
                conforme o estágio de maturação, indo de verde a tons
                amarelo/vermelho intensos. A forma simétrica e uniforme indica um
                desenvolvimento adequado, enquanto a textura da casca, firme e sem
                rugosidades excessivas, sugere frescor e saúde.
              </Text>
              <View style={[styles.linha03, styles.linhaBorder]} />
              <Text style={[styles.sobreOCacau, styles.cacauFlexBox]}>
                Sobre o cacau
              </Text>
            </View>
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

            

            <View style={styles.cacau}>

              <View style={styles.background} />

              <Image
                style={[styles.cacauSaudvelIcon, styles.cacauSaudvelIconPosition]}
                contentFit="cover"
                //source={}
              />
              
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

            {/* RESULTADO: NECESSITA SER MANIPULADOS OS DADOS; */}
            <View style={styles.resultadoTxI}>
              <Image
                style={[styles.desenhoCacauSaudavek, styles.dashboardIconLayout]}
                contentFit="cover"
                source={require("../assets/desenho-cacau-saudavek1.png")}
              />

              <Text style={[styles.saudvel2, styles.saudvelTypo]}>Saudável</Text>

              <Text style={[styles.dePreciso, styles.dePrecisoTypo]}>
                (90% de precisão)
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
  dePrecisoTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.colorSienna,
    fontSize: FontSize.size_3xs,
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
  diagnsticoChild: {
    height: 953,
    width: 500,
    left: 0,
  },
  dashboardIcon: {
    right: "0%",
    left: "0%",
    width: "100%",
  },
  vassDeBruxa: {
    height: "33.33%",
    width: "27.82%",
    left: "72.18%",
    color: Color.colorMediumslateblue_100,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
    top: "0%",
  },
  saudvel: {
    height: "27.78%",
    width: "19.54%",
    top: "27.47%",
    left: "0.04%",
    color: Color.colorLimegreen,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  text: {
    width: "7.09%",
    top: "45.99%",
    left: "88.7%",
    color: Color.colorMediumslateblue_100,
  },
  text1: {
    width: "10.46%",
    top: "70.37%",
    color: Color.colorLimegreen,
    left: "0%",
  },
  textos: {
    height: "19.88%",
    width: "98.49%",
    top: "30.12%",
    right: "-1.47%",
    bottom: "50%",
    left: "2.98%",
    position: "absolute",
  },
  grficoDeRosca: {
    top: 33,
    backgroundColor: "#f8f8f8",
    width: 265,
    height: 163,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  linha03: {
    width: 271,
    top: 22,
    left: 0,
  },
  anliseGrfica: {
    height: "9.18%",
    alignItems: "center",
    color: Color.colorSienna,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    top: "0%",
    position: "absolute",
    lineHeight: 13,
    fontSize: FontSize.size_3xs,
    left: "0.48%",
    width: "99.52%",
  },
  grficoPizza: {
    top: 550,
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
  oCacauCapturado: {
    height: "79.29%",
    top: "20.71%",
    lineHeight: 14,
    textAlign: "justify",
    alignItems: "center",
    display: "flex",
    left: "0.48%",
    width: "99.52%",
    fontWeight: "500",
  },
  sobreOCacau: {
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
    fontSize: FontSize.size_3xs,
    left: "0.48%",
    width: "99.52%",
  },
  detalhesDoResultado: {
    height: "14.89%",
    width: "87.53%",
    top: "41.81%",
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
  background: {
    backgroundColor: "#282828",
    width: 270,
    height: 320,
    left: 20,
    zIndex: 0,
    borderRadius: Border.br_5xs,
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
  detalhesDaAnlise: {
    height: 940,
    left: 0,
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
    height: "27.12%",
    width: "50.57%",
    top: "66.1%",
    left: "1.95%",
    textAlign: "center",
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

  resultadoDaAnlise: {
    height: 116,
    width: 400,
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
    height: 1220,
    width: "100%",
  },
});

export default DIAGSAUDAVEL;
