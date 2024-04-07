import React, {useState} from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import ViewImage from "../components/ViewImage/ViewImage"; //Componente
import { useRoute } from "@react-navigation/native";
import { PieChart } from 'react-native-svg-charts';
import TIPOCLASS from "./TIPOSCLASS";

const DIAGSAUDAVEL_TST = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const img_select = route.params?.capturedImage; //Recebe a URI da imagem selecionada da galera ou capturada e atribui a var img_select;
  const {respostaAPI} = route.params; //Recebe o resultado da predição;
  // Calcula a classe com a maior confiança;
  const maxConfidenceClass = Object.keys(respostaAPI).reduce((a, b) => respostaAPI[a] > respostaAPI[b] ? a : b);
  // Calcula a porcentagem das classes;
  const maxConfidencePercentage = (respostaAPI[maxConfidenceClass] * 100).toFixed(2);
  // Texto sobre o cacau com base na classe com maior confiança
  let textoSobreCacau = '';
  let textoCuidadosCacau = '';
  let classified = '';
  let imagem;

  console.log('Uri no DiagSaudavel: ', img_select);
  console.log('Predição - DIAGSAUDAVEL: ', respostaAPI);

  // Mapeamento dos valores de classe para os nomes desejados
  const nomePersonalizado = {
    'Classe 0': 'Saudável',
    'Classe 1': 'Podridão Parda',
    'Classe 2': 'Vassoura-de-Bruxa',
  };

  //Extrair os dados para o gráfico de pizza;
  const data = Object.entries(respostaAPI).map(([classe, porcentagem]) => ({
    name: nomePersonalizado[classe] || classe,
    percentagem: parseFloat((porcentagem * 100).toFixed(2)), // Converter para número e limitar a 2 casas decimais
    color: getColorForClass(classe), // Função que retorna uma cor para cada classe
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  }));
  //Dados enviados para o Gráfico;
  const pieData = data.map((item, index) => ({
    value: item.percentagem,
    svg: {
      fill: item.color,
    },
    key: `pie-${index}`,
  }));

  //Variáveis dinâmicas;
  switch (maxConfidenceClass) {
    case 'Classe 0': //Saudável;
      classified = 'Fruto Saudável';
      textoSobreCacau = 'O cacau capturado apresenta uma casca saudável e brilhante e consistente, livre de manchas ou deformidades. Sua cor varia conforme o estágio de maturação, indo de verde a tons amarelo/vermelho intensos. A forma simétrica e uniforme indica um desenvolvimento adequado, enquanto a textura da casca, firme e sem rugosidades excessivas, sugere frescor e saúde.';
      textoCuidadosCacau = 'O fruto diagnosticado apresenta um resultado satisfatório, nesse sentido, a planta está sendo preservada utilizando boas práticas agrícolas, como irrigação adequada, controle de pragas e doenças, e manejo adequado do solo, contribuindo para a saúde geral dos seus frutos.';
      imagem = require("../assets/images/desenho-cacau-saudavek1.png");
      break;
    case 'Classe 1': //Podridão Parda;
      classified = 'Podridão Parda';
      textoSobreCacau = 'O cacau capturado apresenta sintomas típicos da doença Podridão Parda, apresentando manchas escuras e enrugadas na superfície, essas manchas eventualmente se expandem e se tornam marrons, com uma textura amolecida e podre. A podridão parda pode se espalhar rapidamente em condições favoráveis, como alta umidade e temperatura. Além de danificar os frutos, a doença pode reduzir a qualidade e o rendimento das colheitas de cacau.';
      textoCuidadosCacau = 'O monitoramento dos sintomas deve ser constante, especialmente em cultivos sombreados, onde a incidência da doença pode ser maior. É essencial remover imediatamente os frutos infectados para evitar a disseminação da doença. Além disso, é importante ficar atento às cascas após a quebra do cacau. Uma prática recomendada é tratar o casqueiro com cal e cobri-lo com lona, visando prevenir a proliferação do fungo presente na casca do fruto e, consequentemente, reduzir os riscos de infecção.';
      imagem = require("../assets/images/desenho-cacau-doentek1.png");
      break;
    case 'Classe 2': //Vassoura-de-Bruxa;
      classified = 'Vassoura-de-Bruxa';
      textoSobreCacau = 'O cacau capturado parece estar infectado pela doença vassoura-de-bruxa apresentando diversos sintomas característicos. Inicialmente, as folhas e galhos ficam secos, assemelhando-se a uma vassoura velha, o que dá nome à doença. Além disso, podem ocorrer lesões necróticas nos frutos, apodrecimento e eventual morte dos cacaueiros. A superfície do fruto pode desenvolver pequenas lesões de cor castanha, seguidas por uma camada esbranquiçada semelhante a pó. Com o tempo, essas lesões podem se espalhar, cobrindo toda a superfície do fruto, emitindo um odor característico de peixe.';
      textoCuidadosCacau = 'O monitoramento precisa ser constante, sempre atento aos sintomas. Assim que a doença for identificada, é importante iniciar imediatamente o controle cultural. O fungo Trichoderma stromaticum pode ser usado no controle dessa doença devido à sua capacidade antagonista contra o fungo causador da Vassoura-de-Bruxa. É recomentado, remover prontamente os galhos e folhas infectados para evitar a propagação da doença.';
      imagem = require("../assets/images/desenho-cacau-doente-vagemk1.png");
      break;
    default:
      textoSobreCacau = 'Informações gerais sobre o cacau';
      textoCuidadosCacau = 'Cuidados gerais com o cacau';
  }
  return (
    <ScrollView style={styles.containerScrol}>
      <View style={styles.contPrim}>
        <View style={styles.retResult}>
          {/* RESULTADO DA ANALISE */}
          <View style={styles.conteiner}>
            <Text style={[styles.title]}>
              Resultado da Análise:
            </Text>
            <Text style={[styles.resultTextoPorcentagem]}>
              {`(${maxConfidencePercentage}% de precisão)`}
            </Text>
            <Image
              style={[styles.iconImgCacau]}
              contentFit="cover"
              source={imagem}
            />
            <Text style={[styles.tituloClassified]}>
              {classified}
            </Text>
          </View>
        </View>
        <View style={styles.contSec}>
            <View style={styles.conteiner}>
              {/* Exibe a imagem capturada*/} 
              <Text style={[styles.title]}>
                Imagem Capturada
              </Text>
              <View style={[styles.linha, styles.linhaBorder]} />
              <TouchableOpacity style={styles.imgCapturada}>
                {/* Componente ExibeImagem */}
                <ViewImage capturedImage={img_select} /> 
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

            <View style={styles.conteiner}>
              <Text style={[styles.title]}>
                Análise Gráfica
              </Text>
              <View style={[styles.linha, styles.linhaBorder]} />
              {/* Gráfico */}
              <View style={styles.contGrafico}>
                <PieChart
                  style={styles.grafico}
                  data={pieData}
                  outerRadius={'95%'}
                />
                {/* LEGENDAS */}
                <View style={styles.legendContainerGfc}>
                  {data.map((item, index) => (
                    <TouchableOpacity
                      key={`legend-${index}`}
                      onPress={() => console.log(`${item.name}: ${item.percentagem}%`)}
                      style={styles.legendItemGfc}
                    >
                      <View style={[styles.legendColorGfc, { backgroundColor: item.color }]} />
                      <Text style={styles.legendTextGfc}>{`${item.name}: ${item.percentagem}%`}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
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
              <TouchableOpacity onPress={() => navigation.navigate(TIPOCLASS)}>
                <Text style={[styles.titSaibamais]}>
                  Saiba mais!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </ScrollView>
  );
};

// Função para retornar uma cor com base na classe
const getColorForClass = (classe) => {
  switch (classe) {
    case 'Classe 0':
      return '#00FF00'; // Verde para saudável
    case 'Classe 1':
      return '#FF0000'; // Vermelho para podridão parda
    case 'Classe 2':
      return '#FFA500'; // Azul para broca da vagem
    default:
      return '#000000'; // Preto como padrão
  }
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
  retResult:{
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    borderWidth: 1, // LARGURA DA BORDA
    borderColor: Color.colorDarkgray, // COR DA BORDA
    height: 150, //ALTURA DA TELA
    padding: 10
  },
  contSec: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    borderWidth: 1, // LARGURA DA BORDA
    borderColor: Color.colorDarkgray, // COR DA BORDA
    height: 1490, //ALTURA DA TELA
    padding: 15,
    marginTop: 15,
    //backgroundColor: 'yellow',
  },
  conteiner:{
    marginBottom: 20,
    //backgroundColor: 'yellow',
  },
  //GRAFICO ;
  contGrafico: {
    alignItems: 'center',
    height: "60%",
    marginBottom: -520
  },
  grafico: {
    aspectRatio: 1, // Ajuste para centralizar o gráfico
  },
  legendContainerGfc:{
    marginTop: 20,
  },
  legendItemGfc: {
    flexDirection: 'row',
    alignItems: 'left',
    marginBottom: 10,
    marginLeft: '-40%',
  },
  legendColorGfc: {
    width: 20,
    borderRadius: 5,
    marginRight: 5,
  },
  legendTextGfc: {
    fontSize: 14,
  },

  //TEXTOS
  text: {
    fontFamily: FontFamily.montserratMedium,
    fontSize: 14,
    textAlign: 'justify',
    color: Color.colorSienna,
    lineHeight: 20,
  },

  // TITULO SAIBA MAIS!
  titSaibamais:{
    color: "#2265E5",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textDecorationLine: 'underline',
    fontSize: 16,
    textAlign: 'left',
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
    width: 80,
    height: 50,
    overflow: 'scroll',
  },
  title: {
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default DIAGSAUDAVEL_TST;