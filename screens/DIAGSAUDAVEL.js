import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const DIAGSAUDAVEL = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.diagSaudavel}>
      <View style={styles.diagnstico}>
        <Image
          style={[styles.diagnsticoChild, styles.diagnsticoChildPosition]}
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
              source={require("../assets/cacau-saudvel.png")}
            />
          </View>
          <View style={[styles.linha2, styles.linhaBorder]} />
          <Text
            style={[styles.imagemCapturada, styles.imagemCapturadaPosition]}
          >
            Imagem capturada
          </Text>
        </View>
        <View style={[styles.resultadoDaAnlise, styles.legenda1Position]}>
          <Image
            style={styles.resultadoDaAnliseChild}
            contentFit="cover"
            source={require("../assets/rectangle-2.png")}
          />
          <View style={styles.result}>
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
          <Text
            style={[styles.resultadoDaAnlise1, styles.cacauFlexBox]}
          >{`Resultado da análise: `}</Text>
        </View>
      </View>
      <View style={[styles.barraDgnc, styles.legenda1Position]}>
        <View style={styles.barraDgnc1} />
        <View
          style={[styles.fiBrAngleRightParent, styles.cacauSaudvelIconPosition]}
        >
          <Pressable
            style={styles.fiBrAngleRight}
            onPress={() => navigation.navigate("CAMERA")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/fibrangleright1.png")}
            />
          </Pressable>
          <Text style={[styles.diagnstico1, styles.saudvelTypo]}>
            DIAGNÓSTICO
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  diagnsticoChildPosition: {
    top: 127,
    left: 0,
    width: 332,
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
  cacauFlexBox: {
    display: "flex",
    alignItems: "center",
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
    borderRadius: Border.br_3xs,
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
    height: 319,
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
    width: 292,
    left: 20,
  },
  imagemCapturada: {
    width: "87.62%",
    top: "1.7%",
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
  detalhesDaAnlise: {
    height: 940,
    left: 0,
  },
  resultadoDaAnliseChild: {
    top: 26,
    height: 90,
    borderRadius: Border.br_3xs,
    left: 0,
    width: 332,
    position: "absolute",
  },
  desenhoCacauSaudavek: {
    width: "34.5%",
    right: "0.05%",
    left: "65.46%",
  },
  saudvel2: {
    height: "44.07%",
    width: "65.32%",
    top: "6.78%",
    fontSize: 24,
    color: Color.colorLimegreen,
    left: "0%",
    position: "absolute",
  },
  dePreciso: {
    height: "27.12%",
    width: "50.57%",
    top: "66.1%",
    left: "1.95%",
    textAlign: "center",
  },
  result: {
    height: "50.86%",
    width: "66.36%",
    top: "35.34%",
    right: "17.83%",
    bottom: "13.79%",
    left: "15.81%",
    position: "absolute",
  },
  resultadoDaAnlise1: {
    height: "22.41%",
    width: "99.37%",
    left: "0.33%",
    fontSize: FontSize.size_xs,
    alignItems: "center",
    color: Color.colorSienna,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    top: "0%",
    position: "absolute",
  },
  resultadoDaAnlise: {
    height: 116,
    width: 332,
  },
  diagnstico: {
    top: 49,
    left: 14,
    height: 1080,
    width: 332,
    position: "absolute",
  },
  barraDgnc1: {
    backgroundColor: Color.colorSienna,
    width: 360,
    height: 45,
    zIndex: 0,
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
  diagnstico1: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    marginLeft: 86,
  },
  fiBrAngleRightParent: {
    top: 14,
    left: 23,
    height: 16,
    flexDirection: "row",
  },
  barraDgnc: {
    height: 45,
  },
  diagSaudavel: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 1218,
    width: "100%",
    borderRadius: Border.br_5xs,
  },
});

export default DIAGSAUDAVEL;
