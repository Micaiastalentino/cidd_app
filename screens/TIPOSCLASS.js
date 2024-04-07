import React, {useEffect} from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/core";

const TIPOCLASS = () => {
    const navigation = useNavigation();

    const historico_tp = (valor) => {
        navigation.navigate('HISTORICO_CLASS', {valor});  
    };

    return (
        <ScrollView style={styles.containerScrol}>
            <View style={styles.container}>
                <View style={styles.contmargintxt}>
                    <Text style={styles.txtClass}>
                        Classificação
                    </Text>
                    <View style={[styles.linha, styles.linhaBorder]} />
                </View>
                <View style={styles.contmargintxt}>
                    <Text style={styles.txtResumo}>
                        Este inovador aplicativo, alimentado por inteligência artificial, 
                        oferece uma classificação precisa dos frutos do cacau, distinguindo
                        entre saudáveis, afetados pela doença Podridão Parda e aqueles 
                        impactados pela temida doença Vassoura-de-Bruxa. Uma ferramenta 
                        avançada que capacita os produtores a tomarem decisões informadas 
                        para preservar a qualidade e a saúde de suas plantações de cacau. 
                    </Text>
                </View>
                <View style={styles.contRet}>
                    <TouchableOpacity style={styles.ret1} onPress={() => historico_tp(1)}>
                        <Text style={styles.txtNClass}>Podridão Parda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ret2} onPress={() => historico_tp(2)}>
                        <Text style={styles.txtNClass}>Vassoura-de-Bruxa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.ret3}>
                        <Text style={styles.txtNClass}> Fruto Saudável</Text>
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
        height: 720, //ALTURA DA TELA
        width: "100%", //LARGURA DA TELA
    },
    contmargintxt:{
        margin: 15
    },
    linha: {
        width: '100%',
    },
    linhaBorder: {
        height: 1,
        borderTopWidth: 1,
        borderColor: Color.colorDarkgray,
        borderStyle: "solid",
    },
    txtClass:{
        fontFamily: FontFamily.montserratBold,
        fontSize: 16,
        color: Color.colorSienna,
        marginBottom: 5,
    },
    txtResumo:{
        fontSize: 14,
        lineHeight: 20,
        marginTop: -15,
        fontWeight: "500",
        color: Color.colorSienna,
        fontFamily: FontFamily.montserratMedium,
        textAlign: "justify",
    },
    txtNClass:{
        fontSize: 18,
        fontWeight: "700",
        color: "#316230",
        fontFamily: FontFamily.montserratBold,
    },

    contRet:{
        margin: 5,
        alignItems: 'center',

    },
    ret1:{
        width: "90%",
        height:"23%",
        backgroundColor: Color.colorWhite,
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 15, // espaçamento entre os retângulos
        justifyContent: 'center', // centralizar o texto verticalmente
    },
    ret2:{
        width: "90%",
        height:"23%",
        backgroundColor: Color.colorWhite,
        marginBottom: 15,
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