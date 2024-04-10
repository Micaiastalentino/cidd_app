import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border } from "../GlobalStyles";
import { Entypo, Feather } from '@expo/vector-icons';

const PERFIL = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.vazio}>
        <Feather name="user" size={80} color={Color.colorSienna}/>
        <Text style={styles.textovazio}>Em uma próxima versão do CIDD essa funcionalidade estará disponível!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textovazio:{
    color: Color.colorSienna,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: 16,
    textAlign: 'center',
    padding: 10
  },
  vazio:{
    flex: 1,
    flexDirection: 'column',
    width: "100%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Color.colorDarkgray,
  },
});

export default PERFIL;
