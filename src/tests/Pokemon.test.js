import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('6 - Test the <Pokemon.js /> component', () => {
  test('6.1 - Test whether to render a card with pokémon.', () => {
    const { getByText, getByRole, getAllByText } = renderWithRouter(<App />);
    const pokemonName = getByText('Pikachu');
    expect(pokemonName).toBeInTheDocument();

    const pokemonType = getAllByText('Electric');
    const value = 2;
    expect(pokemonType).toHaveLength(value);

    const pokemonWeight = getByText('Average weight: 6.0 kg');
    expect(pokemonWeight).toBeInTheDocument();

    const pokemonImg = getByRole('img');
    expect(pokemonImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pokemonImg).toHaveAttribute('alt', 'Pikachu sprite');
  });
  test('6.2 - Test if the Pokémon card contains a navigation link', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText('More details'));
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });
  test('6.5 -  Test if there is a star icon on favorite Pokémon', () => {
    const { getByText, getByAltText, getByRole } = renderWithRouter(<App />);
    fireEvent.click(getByText(/More details/i));
    fireEvent.click(getByRole('checkbox'));
    const pokemonFavImg = getByAltText('Pikachu is marked as favorite');
    expect(pokemonFavImg).toHaveAttribute('src', '/star-icon.svg');
    expect(pokemonFavImg).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
