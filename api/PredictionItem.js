import React from 'react';
import { View, Text } from 'react-native';

const PredictionItem = ({ className, confidence }) => {
  return (
    <View>
      <Text>{`${className}: ${confidence}`}</Text>
    </View>
  );
};

export default PredictionItem;