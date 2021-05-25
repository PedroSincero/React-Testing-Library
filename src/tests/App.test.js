import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('1 - Test the Component <App.js /> ', () => {
  test('1.1 - shows the Pokédex when the route is `/`', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const routeHome = history.location.pathname;
    fireEvent.click(getByText('Home'));
    expect(routeHome).toBe('/');
  });
  test('1.2 - shows the Pokédex when the route is `/about`', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const routeHome = history.location.pathname;
    fireEvent.click(getByText('About'));
    expect(routeHome).toBe('/about');
  });
  test('1.3 - shows the Pokédex when the route is `/favorites`', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const routeHome = history.location.pathname;
    fireEvent.click(getByText('Favorite Pokémons'));
    expect(routeHome).toBe('/favorites');
  });
});
