import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextToSpeech from './TextToSpeech';

describe('<TextToSpeech />', () => {
  test('it should mount', () => {
    render(<TextToSpeech />);

    const textToSpeech = screen.getByTestId('TextToSpeech');

    expect(textToSpeech).toBeInTheDocument();
  });
});