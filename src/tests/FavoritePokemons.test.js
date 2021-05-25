import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
// import { fireEvent } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from './renderWithRouter';
// import App from '../App';

describe('3 - Test the <Favorite Pokemons.js /> component ', () => {
  test('3.1 - message No favorite pokemon found is displayed on the screen', () => {
    const { getByText } = renderWithRouter(<FavoritePokemons />);
    const pokemonFavoriteNull = getByText('No favorite pokemon found');
    expect(pokemonFavoriteNull).toHaveTextContent('No favorite pokemon found');
  });
  // test('3.2 - Test whether all your favorite Pokémon cards are displayed', () => {
  //   const { getAllByRole, getByRole, getAllByTestId } = renderWithRouter(<App />);
  //   const testId = getAllByTestId('pokemon-name');
  //   const button = getAllByRole('button');

  //   fireEvent.click(button[1]);
  //   expect(button[1]).toHaveTextContent(/Electric/i);

  //   // fireEvent.click(getByText(/More details/i));
  //   // const check = getByRole('checkbox');

  //   fireEvent.click(check);
  //   // fireEvent.click(getByText(/Favorite Pokémons/i));
  // });
});
