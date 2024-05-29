import React, {useState} from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import shareContent from "../components/ShareContent/ShareContent"
import CustomModal from "../components/CustomModal/CustomModal";

const CONFIGURACOES = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.configuracoes}>
      <MenuItem style={styles.title}
        icon={null}
        text="APOIE ESSE APP"
        textStyle={styles.apoieEsseAppText}
      />
      <MenuItem
        icon={require("../assets/images/compartilhar1.png")}
        text="Partilhar link de download"
        onPress={shareContent}
      />
      {/*
      <MenuItem
        icon={require("../assets/images/instagram.png")}
        text="Siga-nos no Instagram"
        onPress={() => {}}
      />
      <MenuItem
        icon={require("../assets/images/firrstar.png")}
        text="Avalie e comente"
        onPress={() => {}}
      />
      <MenuItem
        icon={require("../assets/images/error1.png")}
        text="Informe um problema"
        onPress={() => {}}
      />
      */}
      <MenuItem
        icon={null}
        text="INFORMAÇÃO & AJUDA"
        onPress={() => {}}
        textStyle={styles.apoieEsseAppText}
      />
      <MenuItem
        icon={require("../assets/images/logo-app.png")}
        text="Sobre o aplicativo"
        onPress={() => {}}
      /> 
      {/* 
      <MenuItem
        icon={require("../assets/images/mail.png")}
        text="Contate-nos"
        onPress={() => {}}
      />
      */}
      <MenuItem
        icon={require("../assets/images/error.png")}
        text="Dicas para tirar fotos"
        onPress={() => setModalVisible(true)}
      />
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalText="Entendido!"
      />
      <MenuDivider />

      <MenuDivider />
    </View>
  );
};

const MenuItem = ({ icon, text, onPress, textStyle }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    {icon && <Image style={styles.menuIcon} source={icon} />}
    <Text style={[styles.menuText, textStyle]}>{text}</Text>
  </TouchableOpacity>
);

const MenuDivider = () => <View style={styles.menuDivider} />;

const styles = StyleSheet.create({
  configuracoes: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 16,
  },
  menuText: {
    fontFamily: FontFamily.montserratMedium,
    fontSize: 15,
    color: Color.colorSienna,
  },
  menuDivider: {
    height: 1,
    backgroundColor: Color.colorLightGray,
    marginVertical: 12,
  },
  apoieEsseAppText: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    //backgroundColor: 'white',
    width: '100%'
  },
  title:{
    backgroundColor: 'yellow',
    width: '100%'
  }
});

export default CONFIGURACOES;