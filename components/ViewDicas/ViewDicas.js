import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";

const CustomModal = ({ modalVisible, setModalVisible, modalText }) => {
  return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>

      <View style={[styles.containerTelaDicas, styles.flex1Layout]}>
        <View style={styles.alinharContainers}>
          <View style={styles.container}>
            <View style={styles.containerCerto}>
              <Text style={styles.txtFoto}>Dicas</Text>
              <Image
                style={styles.fotoCertaIcon}
                contentFit="cover"
                source={require("../../assets/images/foto-certa.png")}
              />
            </View>
            <View style={styles.evite}>
              <Image
                style={styles.linhaIcon}
                contentFit="cover"
                source={require("../../assets/images/linha.png")}
              />
              <Text style={[styles.eviteCapturarOs, styles.pertoDeMais1Typo]}>
                Evite capturar os frutos desses modos:
              </Text>
              <View style={styles.eviteInner}>
                <View style={styles.errado01Parent}>
                  <View style={styles.errado01}>
                    <Image
                      style={styles.pertoDeMais}
                      contentFit="cover"
                      source={require("../../assets/images/perto-de-mais.png")}
                    />
                    <View style={[ styles.pertoDeMaisParent, styles.parentSpaceBlock]}>
                      <Text style={[styles.pertoDeMais1, styles.pertoDeMais1Typo]}>
                        Perto de mais
                      </Text>
                      <Image
                        style={[styles.iconerrado, styles.iconerradoLayout]}
                        contentFit="cover"
                        source={require("../../assets/images/iconerrado.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.errado02}>
                    <Image
                      style={styles.pertoDeMais}
                      contentFit="cover"
                      source={require("../../assets/images/errado02.png")}
                    />
                    <View style={styles.parentSpaceBlock}>
                      <Text style={[styles.vriosFrutos, styles.pertoDeMais1Typo]}>
                        Vários frutos
                      </Text>
                      <Image
                        style={[styles.iconerrado1, styles.iconerradoLayout]}
                        contentFit="cover"
                        source={require("../../assets/images/iconerrado1.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.certoIcone, styles.flex1Layout]}
            contentFit="cover"
            source={require("../../assets/images/certo-icone.png")}
          />
          <Pressable 
            style={[styles.button]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={[styles.txtButton]}>
              {modalText}
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  flex1Layout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  pertoDeMais1Typo: {
    height: 25,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorWhite,
    lineHeight: 20,
    alignItems: "center",
  },
  parentSpaceBlock: {
    marginTop: 8,
    alignItems: "center",
  },
  iconerradoLayout: {
    borderRadius: Border.br_lg,
    overflow: "hidden",
  },
  button: {
    alignItems: "center",
  },

  //PRINCIPAL
  containerTelaDicas: {
    backgroundColor: "#282828",
    borderStyle: "solid",
    borderColor: "#797777",
    borderWidth: 1,
    width: "80%",
    height: "75%",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
    marginTop: 90,
  },

  txtFoto: {
    textAlign: "center",
    color: Color.colorWhite,
    lineHeight: 20,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  fotoCertaIcon: {
    width: 123,
    height: 152,
    marginTop: 13,
  },
  containerCerto: {
    alignItems: "center",
  },
  linhaIcon: {
    maxHeight: "100%",
    width: 272,
  },
  eviteCapturarOs: {
    marginTop: 15,
    width: 272,
  },
  pertoDeMais: {
    height: 100,
    width: 111,
  },
  pertoDeMais1: {
    width: 100,
  },
  iconerrado: {
    width: 26,
    height: 26,
    marginTop: 4,
    overflow: "hidden",
  },
  pertoDeMaisParent: {
    width: 111,
  },
  errado01: {
    alignItems: "flex-end",
  },
  vriosFrutos: {
    height: 20,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorWhite,
    lineHeight: 20,
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
  },
  iconerrado1: {
    width: 27,
    height: 27,
    marginTop: 5,
    overflow: "hidden",
  },
  errado02: {
    marginLeft: 50,
  },
  errado01Parent: {
    flexDirection: "row",
  },
  eviteInner: {
    marginTop: 15,
  },
  evite: {
    marginTop: 20,
  },
  container: {
    zIndex: 0,
    alignItems: "center",
  },
  certoIcone: {
    top: 72,
    left: 183,
    width: 36,
    height: 36,
    zIndex: 1,
    overflow: "hidden",
  },

  txtButton: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorWhite,
    lineHeight: 20,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },

  //BOTAO;
  button: {
    borderRadius: 20,
    backgroundColor: "rgba(28, 202, 129, 0.9)",
    width: 140,
    height: 45,
    paddingHorizontal: 7,
    paddingVertical: 12,
    marginTop: 30,
    overflow: "hidden",
    flexDirection: "row",
  },


  alinharContainers: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomModal;

{/*import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";

const ViewDicas = () => {
  return (
    <View style={styles.dicas}>
      <View style={[styles.flex1, styles.flex1Layout]} />
      <View style={styles.dicas1}>
        <View style={styles.imagens}>
          <View style={styles.container}>
            <View style={styles.containerCerto}>
              <Text style={styles.txtFoto}>Dicas</Text>
              <Image
                style={styles.fotoCertaIcon}
                contentFit="cover"
                source={require("../../assets/images/foto-certa.png")}
              />
            </View>
            <View style={styles.evite}>
              <Image
                style={styles.linhaIcon}
                contentFit="cover"
                source={require("../../assets/images/linha.png")}
              />
              <Text style={[styles.eviteCapturarOs, styles.pertoDeMais1Typo]}>
                Evite capturar os frutos desses modos:
              </Text>
              <View style={styles.eviteInner}>
                <View style={styles.errado01Parent}>
                  <View style={styles.errado01}>
                    <Image
                      style={styles.pertoDeMais}
                      contentFit="cover"
                      source={require("../../assets/images/perto-de-mais.png")}
                    />
                    <View
                      style={[
                        styles.pertoDeMaisParent,
                        styles.parentSpaceBlock,
                      ]}
                    >
                      <Text
                        style={[styles.pertoDeMais1, styles.pertoDeMais1Typo]}
                      >
                        Perto de mais
                      </Text>
                      <Image
                        style={[styles.iconerrado, styles.iconerradoLayout]}
                        contentFit="cover"
                        source={require("../../assets/images/iconerrado.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.errado02}>
                    <Image
                      style={styles.pertoDeMais}
                      contentFit="cover"
                      source={require("../../assets/images/errado02.png")}
                    />
                    <View style={styles.parentSpaceBlock}>
                      <Text style={[styles.vriosFrutos, styles.buttonFlexBox]}>
                        Vários frutos
                      </Text>
                      <Image
                        style={[styles.iconerrado1, styles.iconerradoLayout]}
                        contentFit="cover"
                        source={require("../../assets/images/iconerrado1.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.certoIcone, styles.flex1Layout]}
            contentFit="cover"
            source={require("../../assets/images/certo-icone.png")}
          />
        </View>
        <View style={[styles.button, styles.buttonFlexBox]}>
          <Text style={[styles.entendido, styles.buttonFlexBox]}>
            Entendido
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex1Layout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  pertoDeMais1Typo: {
    height: 15,
    justifyContent: "center",
    display: "flex",
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorWhite,
    lineHeight: 20,
    alignItems: "center",
  },
  parentSpaceBlock: {
    marginTop: 8,
    alignItems: "center",
  },
  iconerradoLayout: {
    borderRadius: Border.br_lg,
    overflow: "hidden",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  flex1: {
    top: 0,
    left: 0,
    backgroundColor: "#282828",
    borderStyle: "solid",
    borderColor: "#797777",
    borderWidth: 1,
    width: 365,
    height: 640,
  },
  txtFoto: {
    textAlign: "center",
    color: Color.colorWhite,
    lineHeight: 20,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  fotoCertaIcon: {
    width: 123,
    height: 152,
    marginTop: 13,
  },
  containerCerto: {
    alignItems: "center",
  },
  linhaIcon: {
    maxHeight: "100%",
    width: 272,
  },
  eviteCapturarOs: {
    marginTop: 15,
    width: 272,
  },
  pertoDeMais: {
    height: 100,
    width: 111,
  },
  pertoDeMais1: {
    width: 89,
  },
  iconerrado: {
    width: 26,
    height: 26,
    marginTop: 4,
    overflow: "hidden",
  },
  pertoDeMaisParent: {
    width: 111,
  },
  errado01: {
    alignItems: "flex-end",
  },
  vriosFrutos: {
    height: 14,
    width: 111,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorWhite,
    lineHeight: 20,
    fontFamily: FontFamily.montserratLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
  },
  iconerrado1: {
    width: 27,
    height: 27,
    marginTop: 5,
    overflow: "hidden",
  },
  errado02: {
    marginLeft: 50,
  },
  errado01Parent: {
    flexDirection: "row",
  },
  eviteInner: {
    marginTop: 15,
  },
  evite: {
    marginTop: 20,
  },
  container: {
    zIndex: 0,
    alignItems: "center",
  },
  certoIcone: {
    top: 72,
    left: 183,
    width: 36,
    height: 36,
    zIndex: 1,
    overflow: "hidden",
  },
  imagens: {
    flexDirection: "row",
  },
  entendido: {
    width: 77,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorWhite,
    lineHeight: 20,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
  },
  button: {
    borderRadius: 20,
    backgroundColor: "rgba(28, 202, 129, 0.9)",
    width: 133,
    height: 39,
    paddingHorizontal: 7,
    paddingVertical: 20,
    marginTop: 26,
    overflow: "hidden",
    flexDirection: "row",
  },
  dicas1: {
    top: 92,
    left: 46,
    alignItems: "center",
    position: "absolute",
  },
  dicas: {
    borderRadius: 8,
    backgroundColor: "#efefef",
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default ViewDicas; */}