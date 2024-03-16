import React from 'react';
import { View, Text } from 'react-native';

const ComponenteDeExibicao = ({ predictions }) => {
  // Calcula a soma de todas as confianças
  const totalConfidence = Object.values(predictions).reduce((acc, confidence) => acc + confidence, 0);
  
  // Identifica a classe com a maior confiança
  const maxConfidenceClass = Object.keys(predictions).reduce((a, b) => predictions[a] > predictions[b] ? a : b);
  
  return (
    <View>
      <Text>Valores das Predições:</Text>
      {/* Itera sobre as predições e formata cada item como uma porcentagem */}
      {Object.entries(predictions).map(([className, confidence]) => (
        <Text key={className} style={{ fontWeight: className === maxConfidenceClass ? 'bold' : 'normal' }}>
          {`${className}: ${(confidence / totalConfidence * 100).toFixed(2)}%`}
        </Text>
      ))}
    </View>
  );
};

export default ComponenteDeExibicao;
