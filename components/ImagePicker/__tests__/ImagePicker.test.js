import * as ImagePicker from 'expo-image-picker';
import { selecionarImagem, convertImageToBase64 } from '../ImagePicker';

// Mock para o lançamento da biblioteca de imagens do Expo
jest.mock('expo-image-picker', () => ({
  launchImageLibraryAsync: jest.fn(),
}));

describe('Teste das funções de seleção e conversão de imagem', () => {
  // Limpa os mocks após cada teste
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Deve selecionar uma imagem corretamente', async () => {
    // Configuração do mock para simular uma imagem selecionada
    const imageUri = 'C:/Users/micai/Downloads/Development/Cacau-Prototype/img-cacau/podridao-parda.jpg';
    const mockResult = {
      canceled: false,
      assets: [{ uri: imageUri }],
    };
    ImagePicker.launchImageLibraryAsync.mockResolvedValue(mockResult);

    // Execução da função para selecionar imagem
    const selectedImage = await selecionarImagem();

    // Verificação se a imagem foi selecionada corretamente
    expect(selectedImage).toEqual(imageUri);
    expect(ImagePicker.launchImageLibraryAsync).toHaveBeenCalledWith({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
  });

  it('Deve lidar corretamente com o cancelamento da seleção de imagem', async () => {
    // Configuração do mock para simular o cancelamento da seleção de imagem
    const mockResult = { canceled: true };
    ImagePicker.launchImageLibraryAsync.mockResolvedValue(mockResult);

    // Execução da função para selecionar imagem
    const selectedImage = await selecionarImagem();

    // Verificação se a função retorna null quando a seleção é cancelada
    expect(selectedImage).toBeNull();
  });

  it('Deve converter uma imagem para base64 corretamente', async () => {
    // Mock para simular a resposta da requisição fetch
    global.fetch = jest.fn(() => ({
      blob: jest.fn(() => ({
        arrayBuffer: jest.fn(() => new ArrayBuffer(8)),
      })),
    }));

    // Mock para simular FileReader
    global.FileReader = jest.fn().mockImplementation(() => ({
      readAsDataURL: jest.fn(),
      result: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/4QB...',
    }));

    const imageUri = 'C:/Users/micai/Downloads/Development/Cacau-Prototype/img-cacau/podridao-parda.jpg';

    // Execução da função para converter imagem para base64
    const base64Image = await convertImageToBase64(imageUri);

    // Verificação se a conversão para base64 foi realizada corretamente
    expect(base64Image).toEqual('/9j/4AAQSkZJRgABAQEAAAAAAAD/4QB...');
    expect(global.fetch).toHaveBeenCalledWith(imageUri);
  });
});
