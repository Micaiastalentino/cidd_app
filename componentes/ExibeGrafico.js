// Arquivo PieChartComponent.js

import React from 'react';
import { PieChart } from 'react-native-chart-kit';
import { View, StyleSheet } from 'react-native';

const ExibeGrafico = ({ data }) => {
  return (
    <View>
      <PieChart style={styles.grafico}
        data={data}
        width={330}
        height={200}
        chartConfig={{
            backgroundColor: '#FFFFFF',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16,
                borderColor: 'black',
                marginTop: '10%',
            },
        }}
        accessor="percentagem"
        backgroundColor="transparent"
        relative
      />
    </View>
  );
};

const styles = StyleSheet.create({
  grafico: {
    marginTop: '10%',
    margin: '0%',
    position: 'absolute',
  }
});

export default ExibeGrafico;