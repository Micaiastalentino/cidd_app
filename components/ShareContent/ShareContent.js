import { Share } from "react-native";

//FUNÇÃO COMPARTILHAMENTO;
const shareContent = () => {
    console.log("Pressionado");
    if (Platform.OS === 'android') {
        Share.share({
        message: 'Confira este link: https://www.appcidd.com.br',
        });
    } else {
        // Implemente a lógica de compartilhamento para outras plataformas (iOS, por exemplo)
    }
};

export default shareContent;