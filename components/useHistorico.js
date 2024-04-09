import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const useHistorico = () => {
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

  return {
    historico,
    mostrarBotaoLimpar,
    carregarHistorico,
    limparHistorico,
    mostrarAlertaLimparHistorico,
    handleItemPress,
    handleItemLongPress,
    atualizarHistorico,
  };
};

export default useHistorico;