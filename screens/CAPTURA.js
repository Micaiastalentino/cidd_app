import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const CAPTURA = () => {
  const navigation = useNavigation();
  const [historico, setHistorico] = useState([]);
  let icon;

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
  const handleItemPress = (item) => {
    navigation.navigate('DET_CAPTURA', { selectedItem: item });
  };
  
  return (
    <ScrollView style={styles.container}>
      {historico.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.conRet} 
          onPress={() => handleItemPress(item)} // Chama a função;
        > 
          <View style={styles.retResult}>
            <View style={styles.conteinerResult}>
              <View style={styles.alinhResult}>
                <Text>Data: {item.dataHora}</Text>
                <Text style={styles.tituloClassified}>{item.classifi}</Text> 
                <Text style={styles.resultTextoPorcentagem}>{item.classeMaiorPorcentagem}% de precisão</Text>
              </View>
              {item.valores === 1 ?(
                <Image
                  resizeMode="cover"
                  source={require("../assets/images/desenho-cacau-doentek1.png")}
                  style={styles.iconImgCacau}
                />
              ) : item.valores === 2 ?(
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
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  retResult:{
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    borderWidth: 1, // LARGURA DA BORDA
    borderColor: Color.colorDarkgray, // COR DA BORDA
    height: 130, //ALTURA DA TELA
    padding: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  conteinerResult:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    //backgroundColor: 'yellow',
  },
  alinhResult:{
    alignItems: 'left'
  },
  //TITULO CLASSIFICAÇÃO
  tituloClassified: {
    color: '#006400',
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: 18,
  },
  //TEXTO PORCENTAGEM;
  resultTextoPorcentagem: {
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorSienna,
    fontWeight: "bold",
    fontSize: 13,
  },
  iconImgCacau: {
    width: 120,
    height: 80,
    overflow: 'scroll',
  }
});

export default CAPTURA;