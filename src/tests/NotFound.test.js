import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
// import { fireEvent } from '@testing-library/react';
import NotFound from '../components/NotFound';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('4 - Teste o componente <NotFound.js /> ', () => {
  test('4.1 - Test if the page contains an h2 ', () => {
    const { getByRole } = renderWithRouter(<NotFound />);
    const getH2 = getByRole('heading', { level: 2,
      name: /Page requested not found Crying emoji/i,
    });
    expect(getH2).toBeInTheDocument();
  });

  test('4.2 - Test if the page contains the following image of a Pokédex.', () => {
    // const { getByRole } = renderWithRouter(<NotFound />);
    const { getByText, history, getByAltText } = renderWithRouter(<App />);
    history.push('/not-found');
    expect(getByText('Page requested not found')).toBeInTheDocument();
    const ALT_IMAGE = 'Pikachu crying because the page requested was not found';
    const img = getByAltText(ALT_IMAGE);
    const SRC_IMAGE = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(img).toHaveAttribute('src', SRC_IMAGE);
    expect(img).toHaveAttribute('alt', ALT_IMAGE);
  });
});
