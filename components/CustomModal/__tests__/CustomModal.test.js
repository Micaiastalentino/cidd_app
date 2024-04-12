import React from 'react';
import { render } from '@testing-library/react-native';
import CustomModal from '../CustomModal';

describe('CustomModal', () => {
  it('should render correctly', () => {
    const modalVisible = true;
    const setModalVisible = jest.fn();
    const modalText = 'Test Modal';

    const { getByText, getByTestId } = render(
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalText={modalText}
      />
    );

    expect(getByTestId('containerTelaDicas')).toBeDefined();
    expect(getByText('Dicas')).toBeDefined();
    expect(getByText('Evite capturar os frutos desses modos:')).toBeDefined();
    expect(getByText('Perto de mais')).toBeDefined();
    expect(getByText('Vários frutos')).toBeDefined();
    expect(getByText(modalText)).toBeDefined();
  });
});
