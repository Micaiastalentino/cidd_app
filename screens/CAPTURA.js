import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo, Feather } from '@expo/vector-icons';
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
        let historicoArray = JSON.parse(historicos); // Converte o JSON de volta para array
        historicoArray = historicoArray.reverse(); // Inverte o array para exibir o último item adicionado primeiro (modo pilha)
        setHistorico(historicoArray); // Atualiza o estado local com o histórico invertido
      }
    } catch (error) {
      console.error('Erro ao carregar histórico:', error);
    }
  };
  
  const limparHistorico = async () => {
    await AsyncStorage.clear();
    atualizarHistorico([]);
    setMostrarBotaoLimpar(false);
    if (navigation && navigation.state) {
      const routeName = navigation.state.routeName;
      navigation.replace(routeName || 'CAPTURA');
    }
  }
  
  const mostrarAlertaLimparHistorico = () => {
    if (!historico || historico.length === 0) {
      Alert.alert(
        'Não existe histórico para excluir!',
      );
    } else {
      Alert.alert(
        'Excluir Históricos',
        'Tem certeza que deseja excluir todos os históricos?',
        [
          { text: 'Cancelar', onPress: () => console.log('Limpeza cancelada') },
          { text: 'Limpar', onPress: () => limparHistorico() },
        ],
        { cancelable: false }
      );
    }
  };

  const handleItemPress = (item) => {
    navigation.navigate('DET_CAPTURA', { selectedItem: item });
  };

  const handleItemLongPress = (index) => {
    Alert.alert(
      'Excluir',
      'Tem certeza que deseja excluir este histórico?',
      [
        { text: 'Cancelar', onPress: () => console.log('Exclusão cancelada') },
        { 
          text: 'Limpar', 
          onPress: () => {
            const novoHistorico = [...historico];
            novoHistorico.splice(index, 1);
            atualizarHistorico(novoHistorico);
          }
        },
      ],
      { cancelable: false }
    );
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
      <View style={styles.barra}>
        <TouchableOpacity onPress={() => navigation.goBack()}  style={styles.iconeEsquerda}>
          <Feather name="arrow-left" size={28} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.titulo}>CAPTURAS</Text>
        <TouchableOpacity onPress={mostrarAlertaLimparHistorico} style={styles.iconeDireita}>
          <Entypo name="trash" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.contPrim}>
        {historico.length === 0 ? (
          <View style={styles.vazio}>
            <Text style={styles.textovazio}>Nenhum histórico de captura</Text>
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
                  {item.valores === 1 ?(
                    <Image
                      resizeMode="cover"
                      source={require("../assets/images/desenho-cacau-doente-pparda.png")}
                      style={styles.iconImgCacau}
                    />
                  ) : item.valores === 2 ?(
                    <Image
                      resizeMode="cover"
                      source={require("../assets/images/desenho-cacau-doente-vassoura.png")}
                      style={styles.iconImgCacau}
                    />
                  ):
                    <Image
                      resizeMode="cover"
                      source={require("../assets/images/desenho-cacau-saudavel.png")}
                      style={styles.iconImgCacauSaudavel}
                    />
                  }
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );  
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  contPrim:{
    flex: 1,
    padding: 15,
  },
  //Modal
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // fundo semi-transparente
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#6f4325',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  //Barra
  barra: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6f4325",
    height: 55,
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  iconeEsquerda: {
    marginRight: "auto", // Move o botão para a esquerda
  },
  iconeDireita: {
    marginLeft: "auto", // Move o botão para a direita
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
  },
  iconImgCacauSaudavel: {
    width: 100,
    height: 80,
    marginLeft: 10,
  },
});

export default CAPTURA;