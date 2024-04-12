import { Share, Platform } from 'react-native';

const shareContent = () => {
    console.log("Pressionado");
    if (Platform.OS === 'android') {
        Share.share({
            message: 'Em breve o aplicativo CIDD estará na PlayStore: https://play.google.com/store/apps/details?id=com.cidd',
        });
    } else {
        // Lógica de compartilhamento para outras plataformas;
    }
};

export default shareContent;