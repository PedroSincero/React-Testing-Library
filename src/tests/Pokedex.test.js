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
    const { getByRole, getByTestId, getByText } = renderWithRouter(<App />);
    const button = getByRole('button', { name: 'Próximo pokémon' });
    const buttonAll = getByRole('button', { name: 'All' });
    expect(getByText('Próximo pokémon')).toBeInTheDocument();

    const pokemons = ['Pikachu', 'Charmander', 'Caterpie', 'Ekans', 'Alakazam', 'Mew', 'Rapidash', 'Snorlax', 'Dragonair'];

    pokemons.forEach((pokemon) => {
      const namePokemon = getByTestId('pokemon-name');
      expect(namePokemon).toHaveTextContent(pokemon);
      fireEvent.click(button);
    });

    // const charmander = getByTestId('pokemon-name');
    // expect(charmander).toHaveTextContent('Charmander');
  });
});
