import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
// import { fireEvent } from '@testing-library/react';
import About from '../components/About';
import renderWithRouter from './renderWithRouter';

describe('2 - Test whether the page contains information about Pokédex ', () => {
  test('2.1 - Test if the page contains an h2 with the text About Pokédex.', () => {
    const { getByRole } = renderWithRouter(<About />);
    const getH2 = getByRole('heading', { level: 2,
      name: /About Pokédex/i,
    });
    expect(getH2).toBeInTheDocument();
  });
  test('2.2 - Test if the page contains two paragraphs with text about Pokédex.', () => {
    const { getByText } = renderWithRouter(<About />);
    const paragraphs1 = 'This application simulates a Pokédex, a';
    const paragraphs2 = ' digital encyclopedia containing all Pokémons';
    const textP1 = 'One can filter Pokémons by type,';
    const textP2 = ' and see more details for each one of them';
    const getParagraphs1 = getByText(paragraphs1 + paragraphs2);
    const getParagraphs2 = getByText(textP1 + textP2);
    expect(getParagraphs1).toBeInTheDocument();
    expect(getParagraphs2).toBeInTheDocument();
  });
  test('2.3 - Test if the page contains the following image of a Pokédex.', () => {
    const { getByRole } = renderWithRouter(<About />);
    const img = getByRole('img');
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    expect(img).toHaveAttribute('alt', 'Pokédex');
  });
});

// Site que me Ajudou https://dev.to/raphaelchaula/a-simple-image-test-in-react-3p6f