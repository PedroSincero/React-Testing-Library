import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('3 - Test the <Favorite Pokemons.js /> component ', () => {
  test('3.1 - message No favorite pokemon found is displayed on the screen', () => {
    const { getByText } = renderWithRouter(<FavoritePokemons />);
    const pokemonFavoriteNull = getByText('No favorite pokemon found');
    expect(pokemonFavoriteNull).toHaveTextContent('No favorite pokemon found');
  });
  test('3.2 - Test whether all your favorite Pokémon cards are displayed', () => {
    const { getByText, getByRole, getAllByTestId } = renderWithRouter(<App />);
    fireEvent.click(getByText(/More details/i));
    fireEvent.click(getByRole('checkbox'));
    fireEvent.click(getByText(/Favorite Pokémons/i));
    const idName = getAllByTestId('pokemon-name');
    expect(idName.length).toBe(1);
  });
});

// Agradecimentos ao Raphael Guimeri Turma 10 - Tribo B
