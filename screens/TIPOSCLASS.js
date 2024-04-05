import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const TIPOCLASS = () => {
    return (
        <ScrollView style={styles.containerScrol}>
            <View style={styles.container}>
                <View style={styles.contmargintxt}>
                    <Text style={styles.txtClass}>
                        Classificação
                    </Text>
                </View>
                <View style={styles.contmargintxt}>
                    <Text style={styles.txtResumo}>
                        Este inovador aplicativo, alimentado por inteligência artificial, 
                        oferece uma classificação precisa dos frutos do cacau, distinguindo
                        entre saudáveis, afetados pela doença de podridão parda e aqueles 
                        impactados pela temida doença vassoura-de-bruxa. Uma ferramenta 
                        avançada que capacita os produtores a tomarem decisões informadas 
                        para preservar a qualidade e a saúde de suas plantações de cacau. 
                    </Text>
                </View>
                <View style={styles.contRet}>
                    <TouchableOpacity  style={styles.ret1}>
                        <Text style={styles.txtNClass}> Fruto Saudável</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ret2}>
                        <Text style={styles.txtNClass}>Podridão Parda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ret3}>
                        <Text style={styles.txtNClass}>Vassoura-de-Bruxa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create ({
    containerScrol: {
        flex: 1,
    },
    container:{
        backgroundColor: Color.colorcolorWhitesmoke_100,
        height: 780, //ALTURA DA TELA
        width: "100%", //LARGURA DA TELA
    },
    contmargintxt:{
        margin: 20
    },
    txtClass:{
        fontSize: 18,
        fontWeight: "700",
        color: Color.colorSienna,
        fontFamily: FontFamily.montserratBold,
        position: 'absolute'
    },
    txtResumo:{
        fontSize: 14,
        lineHeight: 19,
        fontWeight: "500",
        color: Color.colorSienna,
        fontFamily: FontFamily.montserratMedium,
        flexDirection: "row",
        textAlign: "justify",
    },
    txtNClass:{
        fontSize: 18,
        fontWeight: "700",
        color: "#316230",
        fontFamily: FontFamily.montserratBold,
        position: 'absolute'
    },

    contRet:{
        flexDirection: 'column',
        margin: 10,
        alignItems: 'center',

    },
    ret1:{
        width: "90%",
        height:"23%",
        backgroundColor: Color.colorWhite,
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 20, // espaçamento entre os retângulos
        justifyContent: 'center', // centralizar o texto verticalmente
    },
    ret2:{
        width: "90%",
        height:"23%",
        backgroundColor: Color.colorWhite,
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
    },
    ret3:{
        width: "90%",
        height:"23%",
        backgroundColor: Color.colorWhite,
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
    }
});

export default TIPOCLASS;