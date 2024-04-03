// ViewImagem.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import ViewImage from '../ViewImage';

describe('ViewImage component', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(
      <ViewImage 
        capturedImage="C:/Users/micai/Downloads/Development/Cacau-Prototype/img-cacau" 
      />
    );
    const imageComponent = getByTestId('image-component');
    expect(imageComponent).toBeDefined();
  });
});