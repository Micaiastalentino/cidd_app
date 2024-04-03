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
      textoCuidadosCacau = 'Remova os frutos afetados assim que forem detectados e destrua-os para evitar a propagação da doença. Mantenha o local limpo, remova restos de plantas e mantenha a área ao redor das árvores de cacau livre de ervas daninhas para reduzir a umidade e minimizar as condições favoráveis ao fungo. Inspecione regularmente as plantas em busca de sintomas da doença para detectar e tratar precocemente os focos de infecção.';
      imagem = require("../assets/images/desenho-cacau-doentek1.png");
      break;
    case 'Classe 2': //Vassoura-de-Bruxa;
      classified = 'Vassoura-de-Bruxa';
      textoSobreCacau = '';
      textoCuidadosCacau = '';
      imagem = require("../assets/images/desenho-cacau-doente-vagemk1.png");
      break;
    default:
      textoSobreCacau = 'Informações gerais sobre o cacau';
      textoCuidadosCacau = 'Cuidados gerais com o cacau';
  }
  return (
    <ScrollView style={styles.containerScrol}>
      <View style={styles.contPrincipal}>
        <View style={styles.contSecundario}>
          <View style={[styles.detalhesDaAnlise, styles.diagnsticoChildPosition]}>
            
            {/* ANALISE GRÁFICA */}
            <View style={styles.viewAnaliseGrafica}>
              <View style={[styles.linha44, styles.linhaBorder]} />
              <Text style={[styles.textAnaliseGrafica, styles.tipoTituloPadrao]}>
                Análise Gráfica
              </Text>
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
            <View style={[styles.linha4, styles.linhaBorder]} />
            <Text style={[styles.textCuidadosEPrec, styles.tipoFont]}>
              {textoCuidadosCacau}
            </Text>
            <Text style={[styles.titCuidadosEPrec, styles.tipoTituloPadrao]}>
              Cuidados e Precauções
            </Text>

            {/* SOBRE O CACAU */}
            <View style={[styles.linha3, styles.linhaBorder]} />
            <Text style={[styles.textSobreoCacau, styles.tipoFont]}>
              {textoSobreCacau}
            </Text>
            <Text style={[styles.titSobreCacau, styles.tipoTituloPadrao]}>
              Sobre o Cacau
            </Text>
            {/* Exibe a imagem capturada*/}  
            <View style={[styles.linha, styles.linhaBorder]} />
            <Text style={[styles.titImagemCapturada, styles.tipoTituloPadrao]}>
              Imagem Capturada
            </Text>
            <TouchableOpacity style={styles.imgCapturada}>
              {/* Componente ExibeImagem */}
              <ViewImage capturedImage={img_select} /> 
            </TouchableOpacity>
          </View>
          
          {/*EDITADA*/}
          <View style={[styles.resultadoDaAnlise, styles.legenda1Position]}>
            <Image
              style={styles.resultadoDaAnliseChild} //RETANGULO MENOR
              contentFit="cover"
              source={require("../assets/images/rectangle-2.png")}
            />
            {/* RESULTADO DA ANALISE */}
            <View style={styles.contResultado}>
              <Image
                style={[styles.iconImgCacau, styles.dashboardIconLayout]}
                contentFit="cover"
                source={imagem}
              />
              <Text style={[styles.compClassified, styles.tituloClassified]}>
                {classified}
              </Text>
              <Text style={[styles.resultTextoPorcentagem]}>
                {`(${maxConfidencePercentage}% de precisão)`}
              </Text>
            </View>
            <Text style={[styles.resultAnalise]}>
              Resultado da Análise:
            </Text>

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
  
  contSecundario: {
    top: '3%',
    marginStart: "2%",
    width: "50%",
    position: "absolute",
  },
  
  contPrincipal: {
    backgroundColor: Color.colorWhite,
    height: 1650, //ALTURA DA TELA
    width: "100%", //LARGURA DA TELA
    //backgroundColor: 'black',
  },

  //GRAFICO ;
  contGrafico: {
    flexDirection: 'col',
    alignItems: 'center',
    width: "100%",
    height: "20%",
    marginTop: '10%'
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
    marginTop: '1%',
    marginLeft: '-40%',
  },
  legendColorGfc: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginRight: 5,
  },
  legendTextGfc: {
    fontSize: 14,
  },
/////////////////////
  

  detalhesDaAnlise: {
    height: 1600,
    //backgroundColor: 'black',
  },

  diagnsticoChildPosition: {
    flex: 1,
    top: 127,
    width: "185%",
    borderRadius: Border.br_3xs,
    borderWidth: 1, // largura da borda
    borderColor: Color.colorDarkgray, // cor da borda
    position: "absolute",
  },
  textTypo: {
    height: "29.63%",
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_4xs,
    position: "absolute",
  },

  /// TITULO CUIDADOS E PRECAUÇÕES
  titCuidadosEPrec: {
    height: "100%",
    width: "100%",
    top: "76%",
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
    fontSize: 16,
  },
  //TEXTO CUIDADOS E PRECAUÇÕES
  textCuidadosEPrec: {
    top: "78%",
    width: "100%",
    textAlign: "justify",
    position: "absolute",
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
  linha: {
    top: '2.5%',
    width: '100%',
  },
  linha3: {
    top: '27.4%',
    width: '100%',
  },
  linha4: {
    top: '77.7%',
    width: '100%',
  },
  linha44: {
    top: '1.5%',
    width: '100%',
  },
  ///TITULO ANALISE GRAFICA
  textAnaliseGrafica: {
    width: "100%",
    height: "100%",
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: 16,
    position: "absolute",
  },
  viewAnaliseGrafica: {
    top: "44%",
    width: "100%",
    height: "100%",
    position: "absolute",
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
  },
  ///SOBRE O CACAU TEXTO
  textSobreoCacau: {
    width: '100%',
    height: "100%",
    marginTop: '118%',
    textAlign: "justify",
  },
  ///TITULO SOBRE O CACAU
  titSobreCacau: {
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
    fontSize: 16,
    width: "100%",
    height: "100%",
    marginTop: "110%",
  },
  //IMAGEM CAPTURADA
  imgCapturada: {
    marginTop: '7%',
    alignItems: 'center',
  },
  // TEXTO IMAGEM CAPTURADA
  titImagemCapturada: {
    width: "100%",
    marginTop: "4%",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorSienna,
    fontWeight: "700",
    fontSize: 16,
  },

  resultadoDaAnliseChild: {
    flex: 1,
    height: "100%",
    width: "100%",
    borderRadius: Border.br_3xs,
    borderWidth: 1, // largura da borda
    borderColor: Color.colorDarkgray, // cor da borda
    position: "absolute",
  },
  //TITULO CLASSIFICAÇÃO
  tituloClassified: {
    width: "100%",
    color: '#006400',
    position: "relative",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: 22,
  },
  //TEXTO PORCENTAGEM;
  resultTextoPorcentagem: {
    width: "100%",
    fontSize: 13,
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorSienna,
    fontWeight: "bold",
  },
  //CONTAINER DO RESULTADO;
  contResultado: {
    width: "100%",
    height: "100%",
    position: "absolute",
    flexDirection: 'column',
    justifyContent: 'center',
    left: '10%',

  },
  //ICON CACAU IMAGEM;
  iconImgCacau: {
    width: "30%",
    height: "70%",
    overflow: 'scroll',
    position: 'absolute',
    right: '15%',
  },

  dePreciso: {
    height: "29",
    width: "50.57%",
    top: "66.1%",
    left: "1.95%",
    textAlign: "center",
    color: 'red',
  },

  resultAnalise: {
    width: "100%",
    height: "100%",
    marginTop: "-7.2%",
    fontSize: 16,
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },


  resultadoDaAnlise: {
    height: 120,
    width: "185.5%",
  },
});

export default DIAGSAUDAVEL_TST;