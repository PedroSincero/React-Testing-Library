import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('5 - Test the <Pokedex.js /> component', () => {
  test('5.1 - Test if the page contains an h2', () => {
    const { getByRole } = renderWithRouter(<App />);
    const getH2 = getByRole('heading', { level: 2,
      name: /Encountered pokémons/i,
    });
    expect(getH2).toBeInTheDocument();
  });
  test('5.2 - Test if the next Pokémon is displayed by clicking the button', () => {
    const { getByRole, getByText } = renderWithRouter(<App />);

    const pokemons = ['Pikachu', 'Charmander', 'Caterpie',
      'Ekans', 'Alakazam', 'Mew', 'Rapidash', 'Snorlax', 'Dragonair'];

    pokemons.forEach((pokemon) => {
      const button = getByRole('button', { name: 'Próximo pokémon' });
      const namePokemon = getByText(pokemon);
      expect(namePokemon).toBeInTheDocument();
      fireEvent.click(button);
    });
  });
  test('5.3 - Test if the Pokédex has the filter buttons.', () => {
    const { getByRole, getByTestId, getAllByTestId } = renderWithRouter(<App />);

    const allButton = getByRole('button', { name: 'All' });
    expect(allButton).toBeInTheDocument();
    fireEvent.click(allButton);

    const types = ['Electric', 'Fire', 'Bug', 'Poison',
      'Psychic', 'Normal', 'Dragon'];

    types.forEach((tipo) => {
      const buttonType = getByRole('button', { name: [tipo] });
      expect(buttonType).toBeInTheDocument();
      const typeText = getByTestId('pokemon-type');
      const typeButton = getAllByTestId('pokemon-type-button');
      const value = 7;
      expect(typeButton).toHaveLength(value);
      expect(typeText).toBeInTheDocument();
      fireEvent.click(buttonType);
    });
  });
});
