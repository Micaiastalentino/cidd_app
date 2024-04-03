import * as ImagePicker from 'expo-image-picker';

//Função Exportável Selecionar Imagem;
export async function selecionarImagem() {
    try {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });
        if (!result.canceled) {
            const imageUri = result.assets[0].uri;
            return imageUri;
        }
    } catch (error) {
        console.log('Erro ao selecionar imagem:', error);
    }
}

//Função Exportável Conversor de Base64;
export async function convertImageToBase64(imageUri) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(imageUri);
            const blob = await response.blob();
            const reader = new FileReader();
            reader.onload = () => {
                const base64 = reader.result.split(',')[1];
                resolve(base64);
            };
            reader.readAsDataURL(blob);
        } catch (error) {
            reject(error);
        }
    });
}