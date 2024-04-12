import { Share, Platform } from 'react-native';
import shareContent from '../ShareContent';

jest.mock('react-native', () => ({
  Share: {
    share: jest.fn(),
  },
  Platform: {
    OS: 'android', // Simulando a plataforma como Android para o primeiro teste
  },
}));

describe('shareContent function', () => {
  it('should call Share.share with the correct message on Android', () => {
    const { share } = Share;
    const expectedMessage = 'Em breve o aplicativo CIDD estará na PlayStore: https://play.google.com/store/apps/details?id=com.cidd';
    
    shareContent();

    expect(share).toHaveBeenCalledWith({
      message: expectedMessage,
    });
  });
});
