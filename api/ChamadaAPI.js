import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

class ChamadaAPI extends Component {
    state = {
        imageBase64: null,
    };

    selecionarImagem = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
            });
            
            if (!result.cancelled) {
                const imageUri = result.assets[0].uri;
                this.convertImageToBase64(imageUri);
            }
        } catch (error) {
            console.log('Erro ao selecionar imagem:', error);
        }
    };

    convertImageToBase64 = async (imageUri) => {
        try {
            const response = await fetch(imageUri);
            const blob = await response.blob();
            const reader = new FileReader();
            reader.onload = () => {
                const base64 = reader.result.split(',')[1];
                this.setState({ imageBase64: base64 });
            };
            reader.readAsDataURL(blob);
        } catch (error) {
            console.log('Erro ao converter imagem para base64:', error);
        }
    };

    chamarAPI = async () => {
        try {
            const { imageBase64 } = this.state;

            if (!imageBase64) {
                console.log('Selecione uma imagem antes de chamar a API');
                return;
            }

            const config = {
                headers: {
                  'Content-Type': 'text/plain',
                },
            };

            console.log(imageBase64);

            const res = await axios.post('http://192.168.1.102:5000/predict', imageBase64, config);
            console.log(res.data);

        } catch (error) {
            if (error.response) {
                console.error('Erro de resposta da API:', error.response.data);
                console.error('Status do erro:', error.response.status);
            } else if (error.request) {
                console.error('Sem resposta da API:', error.request);
            } else {
                console.error('Erro durante a configuração da requisição:', error.message);
            }
            console.error('Erro geral ao chamar a API:', error);
        }
    };

    render() {
        return (
            <View>
                {this.state.imageBase64 && (
                    <Image source={{ uri: `data:image/jpeg;base64,${this.state.imageBase64}` }} style={{ width: 200, height: 200 }} />
                )}
                <TouchableOpacity onPress={this.selecionarImagem} style={styles.buttonContainer}>
                    <Text style={styles.text}>Selecionar Imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.chamarAPI} style={styles.buttonContainer}>
                    <Text style={styles.text}>Diagnosticar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 200,
        height: 58,
        padding: 3,
        backgroundColor: '#2E8B57',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#ffd33d",
        borderRadius: 18,
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'white',
    },
});

export default ChamadaAPI;