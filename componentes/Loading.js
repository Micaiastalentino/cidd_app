import React, { useState } from 'react';
import { View, Text, Modal, ActivityIndicator, StyleSheet, Button } from 'react-native';

const LoadingModal = ({ visible }) => (
  <Modal transparent visible={visible}>
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando...</Text>
      </View>
    </View>
  </Modal>
);

export const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Função para mostrar a tela de carregamento
  const showLoading = () => {
    setIsLoading(true);
    // Lógica para carregar dados
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Simulação de uma resposta depois de 2 segundos
  };

  return (
    <View style={styles.container}>
      <Text>Seu conteúdo de componente aqui</Text>
      <LoadingModal visible={isLoading} />
      <Button title="Mostrar Carregando" onPress={showLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default Loading;
