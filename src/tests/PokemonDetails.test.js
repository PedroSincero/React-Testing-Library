import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import data from '../data';

describe('7 - Test the <PokemonDetails.js /> component', () => {
  test('7.1 - Test the information of the Pokémon selected on the screen.', () => {
    const { getByText, getByRole } = renderWithRouter(<App />);
    const moreDetails = getByText(/More details/i);
    fireEvent.click(moreDetails);
    expect(moreDetails).not.toBeInTheDocument();

    const pikachuDetails = getByRole('heading', { level: 2, name: 'Pikachu Details' });
    expect(pikachuDetails).toBeInTheDocument();

    const summary = getByRole('heading', { level: 2, name: 'Summary' });
    expect(summary).toBeInTheDocument();

    const summaryText = getByText(data[0].summary);
    expect(summaryText).toBeInTheDocument();
  });

  test('7.2 - Test if there is a section with maps of pokémon locations', () => {
    const { getByText, getByRole, getAllByRole } = renderWithRouter(<App />);

    fireEvent.click(getByText('More details'));
    const loc = getByRole('heading', { level: 2, name: 'Game Locations of Pikachu' });
    expect(loc).toBeInTheDocument();

    const maps = data[0].foundAt;
    maps.forEach(({ map }, index) => {
      const imgMap = getAllByRole('img', { name: 'Pikachu location', src: map });
      expect(imgMap[index].src).toEqual(map);
      const value = 2;
      expect(imgMap).toHaveLength(value);
    });
  });
  test('7.3 - Test if the user can favor a Pokémon', () => {
    const { getByRole, getByText, getByLabelText } = renderWithRouter(<App />);
    fireEvent.click(getByText('More details'));

    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    const label = getByLabelText('Pokémon favoritado?');
    expect(label).toBeInTheDocument();

    fireEvent.click(checkbox);
    const iconFav = getByRole('img', { name: 'Pikachu is marked as favorite' });
    expect(iconFav).toHaveAttribute('src', '/star-icon.svg');

    fireEvent.click(checkbox);
    expect(iconFav).not.toBeInTheDocument();
  });
});
