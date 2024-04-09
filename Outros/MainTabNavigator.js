import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo } from '@expo/vector-icons';
import { Color, FontFamily, Border } from "../GlobalStyles";

const CAPTURA = () => {
  const navigation = useNavigation();
  const [historico, setHistorico] = useState([]);
  const [mostrarBotaoLimpar, setMostrarBotaoLimpar] = useState(false);

  useEffect(() => {
    carregarHistorico();
  }, []);

  const carregarHistorico = async () => {
    try {
      const historicos = await AsyncStorage.getItem('historico_diagnosticos');
      if (historicos) {
        setHistorico(JSON.parse(historicos));
      }
    } catch (error) {
      console.error('Erro ao carregar histórico:', error);
    }
  };

  const limparHistorico = async () => {
    try {
      await AsyncStorage.clear();
      atualizarHistorico([]);
      setMostrarBotaoLimpar(false);
      const routeName = navigation.dangerouslyGetState().routes[0].name;
      navigation.replace(routeName || 'CAPTURA');
    } catch (error) {
      console.error('Erro ao limpar o histórico:', error);
    }
  };

  const mostrarAlertaLimparHistorico = () => {
    Alert.alert(
      'Limpar Histórico',
      'Tem certeza que deseja limpar todos os históricos?',
      [
        { text: 'Cancelar', onPress: () => console.log('Limpeza cancelada') },
        { text: 'Limpar', onPress: limparHistorico },
      ],
      { cancelable: false }
    );
  };

  const handleItemPress = (item) => {
    navigation.navigate('DET_CAPTURA', { selectedItem: item });
  };

  const handleItemLongPress = (index) => {
    const novoHistorico = [...historico];
    novoHistorico.splice(index, 1);
    atualizarHistorico(novoHistorico);
  };

  const atualizarHistorico = async (novoHistorico) => {
    try {
      if (novoHistorico && novoHistorico.length > 0) {
        await AsyncStorage.setItem('historico_diagnosticos', JSON.stringify(novoHistorico));
      } else {
        await AsyncStorage.removeItem('historico_diagnosticos');
      }
      setHistorico(novoHistorico);
      setMostrarBotaoLimpar(novoHistorico.length > 0);
    } catch (error) {
      console.error('Erro ao atualizar histórico:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {mostrarBotaoLimpar && (
        <TouchableOpacity onPress={mostrarAlertaLimparHistorico} style={styles.icone}>
          <Entypo name="list" size={33} color="#000000" />
        </TouchableOpacity>
      )}
      {historico.length === 0 ? (
        <View style={styles.vazio}>
          <Text style={styles.textovazio}>Nenhum histórico de captura!</Text>
        </View>
      ) : (
        historico.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.conRet} 
            onPress={() => handleItemPress(item)}
            onLongPress={() => handleItemLongPress(index)}
          > 
            <View style={styles.retResult}>
              <View style={styles.conteinerResult}>
                <View style={styles.alinhResult}>
                  <Text>Data: {item.dataHora}</Text>
                  <Text style={styles.tituloClassified}>{item.classifi}</Text> 
                  <Text style={styles.resultTextoPorcentagem}>{item.classeMaiorPorcentagem}% de precisão</Text>
                </View>
                <Image
                  resizeMode="cover"
                  source={require(`../assets/images/desenho-cacau-${item.valores === 1 ? 'doentek1' : item.valores === 2 ? 'doente-vagemk1' : 'saudavek1'}.png`)}
                  style={styles.iconImgCacau}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );  
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  icone:{
    position: 'absolute',
  },
  vazio:{
    flex: 1,
    flexDirection: 'column',
    width: "100%",
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Color.colorDarkgray,
  },
  textovazio:{
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: 16,
    alignItems: 'center',
    marginTop: 9,
  },
  retResult:{
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.colorDarkgray,
    height: 130,
    padding: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  conteinerResult:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  alinhResult:{
    alignItems: 'left'
  },
  tituloClassified: {
    color: '#006400',
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: 18,
  },
  resultTextoPorcentagem: {
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorSienna,
    fontWeight: "bold",
    fontSize: 13,
  },
  iconImgCacau: {
    width: 120,
    height: 80,
  }
});

export default CAPTURA;

{/*
import React, {useState} from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import ViewImage from "../components/ViewImage/ViewImage"; //Componente
import { useRoute } from "@react-navigation/native";
import { PieChart } from 'react-native-svg-charts';

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
  let valor=-1;

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
 // o fruto capturado parece estar classificado como saudável, com uma confiança de 90.54%."
  //Variáveis dinâmicas;
  switch (maxConfidenceClass) {
    case 'Classe 0': //Saudável;
      classified = 'Fruto Saudável';
      textoSobreCacau = `O fruto capturado parece estar classificado como saudável, com uma confiança de ${maxConfidencePercentage}%, demonstrando um resultado satisfatório na adoção de práticas agrícolas que visam sua preservação, implementação de uma irrigação adequada e controle eficiente de pragas e doenças, além de um manejo cuidadoso do solo sendo estes aspectos fundamentais nesse processo. Essas medidas não apenas garantem a qualidade individual dos frutos, mas também fortalecem a saúde global da planta, resultando em uma colheita sustentável e de alta qualidade.`;
      textoCuidadosCacau = 'O fruto diagnosticado apresenta um resultado satisfatório, indicando que a planta está sendo preservada por meio da implementação de boas práticas agrícolas, tais como irrigação adequada, controle eficaz de pragas e doenças, além de um manejo cuidadoso do solo. Essas medidas contribuem significativamente para a saúde geral dos frutos, assegurando uma produção de alta qualidade.';
      imagem = require("../assets/images/desenho-cacau-saudavek1.png");
      break;
    case 'Classe 1': //Podridão Parda;
      classified = 'Podridão Parda';
      textoSobreCacau = `O fruto capturado parece estar classificado com a doença Podridão Parda, com uma confiança de ${maxConfidencePercentage}%, apresentando manchas escuras e enrugadas na superfície, essas manchas eventualmente se expandem e se tornam marrons, com uma textura amolecida e podre. A Podridão Parda pode se espalhar rapidamente em condições favoráveis, como alta umidade e temperatura. Além de danificar os frutos, a doença pode reduzir a qualidade e o rendimento das colheitas de cacau.`;
      textoCuidadosCacau = 'O monitoramento dos sintomas deve ser constante, especialmente em cultivos sombreados, onde a incidência da doença pode ser maior. É essencial remover imediatamente os frutos infectados para evitar a disseminação da doença. Além disso, é importante ficar atento às cascas após a quebra do cacau. Uma prática recomendada é tratar o casqueiro com cal e cobri-lo com lona, visando prevenir a proliferação do fungo presente na casca do fruto e, consequentemente, reduzir os riscos de infecção.';
      imagem = require("../assets/images/desenho-cacau-doentek1.png");
      valor = 1;
      break;
    case 'Classe 2': //Vassoura-de-Bruxa;
      classified = 'Vassoura-de-Bruxa';
      textoSobreCacau = `O fruto capturado parece estar classificado com a doença Vassoura-de-Bruxa, com uma confiança de ${maxConfidencePercentage}%, apresentando diversos sintomas característicos. Inicialmente, as folhas e galhos ficam secos, assemelhando-se a uma vassoura velha, o que dá nome à doença. Além disso, podem ocorrer lesões necróticas nos frutos, apodrecimento e eventual morte dos cacaueiros. A superfície do fruto pode desenvolver pequenas lesões de cor castanha, seguidas por uma camada esbranquiçada semelhante a pó. Com o tempo, essas lesões podem se espalhar, cobrindo toda a superfície do fruto, emitindo um odor característico de peixe.`;
      textoCuidadosCacau = 'O monitoramento precisa ser constante, sempre atento aos sintomas. Assim que a doença for identificada, é importante iniciar imediatamente o controle cultural. O fungo Trichoderma stromaticum pode ser usado no controle dessa doença devido à sua capacidade antagonista contra o fungo causador da Vassoura-de-Bruxa. É recomentado, remover prontamente os galhos e folhas infectados para evitar a propagação da doença.';
      imagem = require("../assets/images/desenho-cacau-doente-vagemk1.png");
      valor = 2;
      break;
    default:
      textoSobreCacau = 'Informações gerais sobre o cacau';
      textoCuidadosCacau = 'Cuidados gerais com o cacau';
  }
  return (
    <ScrollView style={styles.containerScrol}>
      <View style={styles.contPrim}>

        <Text style={[styles.title]}>
          Resultado da Análise:
        </Text>
        <View style={styles.retResult}>
          <View style={styles.conteinerResult}>
            <View style={styles.alinhResult}>
              <Text style={[styles.tituloClassified]}>
                {classified}
              </Text>
              <Text style={[styles.resultTextoPorcentagem]}>
                {`(${maxConfidencePercentage}% de precisão)`}
              </Text>
            </View>
            <Image
              style={[styles.iconImgCacau]}
              contentFit="cover"
              source={imagem}
            />
          </View>
        </View>
        <View style={styles.contSec}>
            <View style={styles.conteiner}>

              <Text style={[styles.title]}>
                Imagem Capturada
              </Text>
              <View style={[styles.linha, styles.linhaBorder]} />
              <TouchableOpacity>

                <ViewImage capturedImage={img_select} /> 
              </TouchableOpacity>
            </View>


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

              <View style={styles.contGrafico}>
                <PieChart
                  style={styles.grafico}
                  data={pieData}
                  outerRadius={'95%'}
                />

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


            <View style={styles.conteiner}>
              <Text style={[styles.title]}>
                Cuidados e Precauções
              </Text>
              <View style={[styles.linha, styles.linhaBorder]} />
              <Text style={[styles.text]}>
                {textoCuidadosCacau}
              </Text>

              {valor == 1 || valor == 2 ? (
                <TouchableOpacity onPress={() => (
                  navigation.navigate('HISTORICO_CLASS', {valor})
                )}>
                  <Text style={styles.titSaibamais}>
                    Saiba mais!
                  </Text>
                </TouchableOpacity>
              ): null}
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
  contSec: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    borderWidth: 1, // LARGURA DA BORDA
    borderColor: Color.colorDarkgray, // COR DA BORDA
    height: 1550, //ALTURA DA TELA
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
    fontWeight: "500",
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
    width: 120,
    height: 80,
    overflow: 'scroll',
  },
  title: {
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default DIAGSAUDAVEL_TST;/*}


//CAPTURAS
{/*
import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CAPTURA = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.captura}>
      <View style={[styles.cacauPodridoParda, styles.cacauPosition]}>
        <View style={styles.background}>
          <View style={[styles.retBackground, styles.retBorder]} />
          <View style={[styles.retBackground1, styles.barraCapturasPosition]} />
          <Image
            style={[styles.fiRsMenuDotsVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/images/firsmenudotsvertical1.png")}
          />
        </View>
        <View style={styles.iconcacauParent}>
          <View style={styles.iconcacau}>
            <Image
              style={[styles.iconcacauChild, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/images/ellipse-2.png")}
            />
            <Image
              style={[
                styles.desenhoCacauDoente,
                styles.desenhoCacauDoentePosition,
              ]}
              contentFit="cover"
              source={require("../assets/images/desenho-cacau-doente.png")}
            />
          </View>
          <View style={styles.txtParent}>
            <View>
              <Text style={[styles.horasAtrs, styles.atrsTypo]}>
                3 horas atrás
              </Text>
              <Text style={[styles.podridoParda, styles.podridoPardaTypo]}>
                Podridão Parda
              </Text>
              <Text style={[styles.dePreciso, styles.dePrecisoLayout]}>
                95% de precisão
              </Text>
            </View>
            <View style={styles.btn}>
              <Pressable onPress={() => navigation.navigate("CAMERA")}>
                <View style={[styles.ret, styles.retLayout]} />
                <Text style={[styles.tentarNovamente, styles.mostrar1Typo]}>
                  Tentar novamente
                </Text>
              </Pressable>
              <View style={styles.mostrar}>
                <View style={[styles.ret1, styles.retLayout]} />
                <Text style={[styles.mostrar1, styles.mostrar1Clr]}>
                  Mostrar
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.cacauSaldavel, styles.cacauPosition]}>
        <View style={styles.background}>
          <View style={[styles.retBackground, styles.retBorder]} />
          <View style={[styles.retBackground1, styles.barraCapturasPosition]} />
        </View>
        <View style={styles.iconcacauParent}>
          <Image
            style={[styles.fiRsMenuDotsVerticalIcon1, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/images/firsmenudotsvertical1.png")}
          />
          <View style={styles.cacauicon}>
            <Image
              style={styles.desenhoCacauSaudavek}
              contentFit="cover"
              source={require("../assets/images/desenho-cacau-saudavek.png")}
            />
            <Image
              style={[styles.cacauiconChild, styles.childLayout]}
              contentFit="cover"
              source={require("../assets/images/ellipse-21.png")}
            />
          </View>
          <View style={styles.txtGroup}>
            <View>
              <Text style={[styles.diasAtrs, styles.atrsTypo]}>
                2 dias atrás
              </Text>
              <Text style={[styles.cacauSaldvel, styles.mostrar1Clr]}>
                Cacau saldável
              </Text>
              <Text style={[styles.dePreciso, styles.dePrecisoLayout]}>
                90% de precisão
              </Text>
            </View>
            <View style={styles.btn}>
              <Pressable onPress={() => navigation.navigate("CAMERA")}>
                <View style={[styles.ret, styles.retLayout]} />
                <Text style={[styles.tentarNovamente, styles.mostrar1Typo]}>
                  Tentar novamente
                </Text>
              </Pressable>
              <Pressable
                style={styles.mostrar}
                onPress={() => navigation.navigate("DIAGSAUDAVEL")}
              >
                <View style={[styles.ret1, styles.retLayout]} />
                <Text style={[styles.mostrar1, styles.mostrar1Clr]}>
                  Mostrar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.barraCapturasPosition}>
        <View style={styles.barraDgnc} />
        <View
          style={[
            styles.fiBrAngleRightParent,
            styles.desenhoCacauDoentePosition,
          ]}
        >
          <Pressable
            style={styles.fiBrAngleRight}
            onPress={() => navigation.navigate("HOME")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/images/fibrangleright.png")}
            />
          </Pressable>
          <Text style={styles.capturas}>CAPTURAS</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cacauPosition: {
    left: 15,
    position: "absolute",
  },
  retBorder: {
    height: 101,
    borderWidth: 0.5,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorSienna,
  },
  barraCapturasPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  menuIconLayout: {
    width: 17,
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  childLayout: {
    height: 55,
    width: 55,
  },
  desenhoCacauDoentePosition: {
    position: "absolute",
    zIndex: 1,
  },
  atrsTypo: {
    height: 9,
    display: "flex",
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_5xs,
    alignItems: "center",
  },
  podridoPardaTypo: {
    width: 115,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  dePrecisoLayout: {
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
  },
  retLayout: {
    height: 28,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 0.5,
    borderStyle: "solid",
    zIndex: 0,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  mostrar1Typo: {
    justifyContent: "center",
    fontSize: FontSize.size_2xs,
    top: 4,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    zIndex: 1,
    position: "absolute",
  },
  mostrar1Clr: {
    color: Color.colorLimegreen,
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
  },
  retBackground: {
    borderRadius: Border.br_3xs,
    width: 327,
    zIndex: 0,
  },
  retBackground1: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 75,
    zIndex: 1,
    height: 101,
    borderWidth: 0.5,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorSienna,
  },
  fiRsMenuDotsVerticalIcon: {
    right: 2,
    bottom: 73,
    zIndex: 2,
    overflow: "hidden",
    top: 12,
  },
  background: {
    zIndex: 0,
  },
  iconcacauChild: {
    zIndex: 0,
  },
  desenhoCacauDoente: {
    top: 5,
    left: 9,
    width: 36,
    height: 45,
    zIndex: 1,
  },
  iconcacau: {
    flexDirection: "row",
  },
  horasAtrs: {
    width: 52,
  },
  podridoParda: {
    color: "#e68767",
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
    width: 115,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  dePreciso: {
    width: 68,
    height: 10,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xs,
    display: "flex",
    color: Color.colorSienna,
    lineHeight: 20,
  },
  ret: {
    width: 124,
    borderColor: Color.colorSienna,
    height: 28,
    borderRadius: Border.br_8xs,
  },
  tentarNovamente: {
    left: 6,
    width: 113,
    display: "flex",
    lineHeight: 20,
    alignItems: "center",
    color: Color.colorSienna,
    fontSize: FontSize.size_2xs,
    top: 4,
  },
  ret1: {
    borderColor: Color.colorLimegreen,
    width: 76,
  },
  mostrar1: {
    left: 3,
    width: 70,
    justifyContent: "center",
    fontSize: FontSize.size_2xs,
    top: 4,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    zIndex: 1,
    position: "absolute",
  },
  mostrar: {
    width: 76,
    marginLeft: 22,
  },
  btn: {
    marginTop: 9,
    flexDirection: "row",
  },
  txtParent: {
    marginLeft: 22,
  },
  iconcacauParent: {
    top: 15,
    left: 8,
    alignItems: "center",
    flexDirection: "row",
    zIndex: 1,
    position: "absolute",
  },
  cacauPodridoParda: {
    top: 183,
  },
  fiRsMenuDotsVerticalIcon1: {
    top: -4,
    right: -13,
    bottom: 64,
    overflow: "hidden",
    zIndex: 0,
  },
  desenhoCacauSaudavek: {
    height: "63.17%",
    width: "75%",
    top: "15%",
    right: "16.67%",
    bottom: "21.83%",
    left: "8.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 0,
    position: "absolute",
  },
  cacauiconChild: {
    marginLeft: 10,
    zIndex: 1,
  },
  cacauicon: {
    width: 60,
    height: 60,
    marginLeft: 22,
    flexDirection: "row",
    zIndex: 1,
  },
  diasAtrs: {
    width: 47,
  },
  cacauSaldvel: {
    width: 115,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  txtGroup: {
    marginLeft: 22,
    zIndex: 2,
  },
  cacauSaldavel: {
    top: 66,
  },
  barraDgnc: {
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
  capturas: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    width: 151,
    marginLeft: 78,
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  fiBrAngleRightParent: {
    left: 7,
    flexDirection: "row",
    top: 12,
    zIndex: 1,
  },
  captura: {
    borderRadius: Border.br_5xs,
    flex: 1,
    height: 640,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default CAPTURA;
*/}