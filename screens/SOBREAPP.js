import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { FontFamily, FontSize } from "../GlobalStyles";

const SOBREAPP = () => {

  return (
    <View style={styles.permiss}>
        
      <View>
            <Image
                style={[styles.background]}
                contentFit="cover"
                source={require("../assets/images/app-logo-init.png")}
            />
            <Text style={styles.tit1}>
                <Text style={{ fontWeight: 'bold' }}>CIDD - Cacau Inteligente: Diagnóstico de Doenças</Text> é um aplicativo inovador desenvolvido
                para ajudar os produtores de cacau a identificar e diagnosticar doenças nas plantações 
                de forma rápida e precisa. O projeto é financiado pela FAPESPA (Fundação Amazônia de 
                Amparo a Estudos e Pesquisas), reforçando o compromisso com a inovação e o desenvolvimento
                sustentável na região.
            </Text>
            <Text style={styles.tit1}>
                O aplicativo utiliza inteligência artificial para analisar imagens dos frutos do cacau e 
                identificar possíveis doenças como Vassoura-de-Bruxa ou Podridão Parda, oferecendo recomendações imediatas para o manejo adequado. 
                Isso facilita a tomada de decisões e contribui para a saúde e produtividade das lavouras.
            </Text>
            <Text style={styles.tit3}>
                <Text style={{ fontWeight: 'bold' }}>Versão:</Text> 1.3.0{'\n'}
                <Text style={{ fontWeight: 'bold' }}>Licença:</Text> Gratuito para uso não comercial.
            </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    background:{
        alignSelf: 'center',
        width: 150,
        height: 150,
    },

    permiss: {
        flex: 1,
        alignItems: 'center'
    },

    tit1: {
        textAlign: 'justify',
        fontFamily: FontFamily.poppinsRegular,
        color: "#6f4330",
        margin: 15,
        lineHeight: 20,
        fontSize: FontSize.size_sm,
        fontWeight: "500",
    },

    tit2: {
        fontFamily: FontFamily.poppinsRegular,
        textAlign: 'center',
        color: "#6f4330",
        margin: 15,
        lineHeight: 16,
        fontSize: 14,
    },

    tit3: {
        fontFamily: FontFamily.poppinsRegular,
        textAlign: 'center',
        color: "#6f4330",
        margin: 15,
        lineHeight: 16,
        fontSize: 14,
        position: 'absolute',  // Posiciona o texto de forma absoluta
        bottom: "-20%",             // Define a posição na parte inferior da tela
        left: 0,               // Opcional: Define a posição à esquerda
        right: 0,              // Opcional: Faz o texto ocupar a largura total da tela
      },

});

export default SOBREAPP;
