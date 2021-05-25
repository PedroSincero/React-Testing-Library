import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('1 - Test the Component <App.js /> ', () => {
  test('1.1 - shows the Pokédex when the route is `/`', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText('Home'));
    const routeHome = history.location.pathname;
    expect(routeHome).toBe('/');
  });
  test('1.2 - shows the Pokédex when the route is `/about`', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const linkAbout = getByText('About');
    fireEvent.click(linkAbout);
    const routeAbout = history.location.pathname;
    expect(routeAbout).toBe('/about');
  });
  test('1.3 - shows the Pokédex when the route is `/favorites`', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText('Favorite Pokémons'));
    const routeFavorite = history.location.pathname;
    expect(routeFavorite).toBe('/favorites');
  });
  test('1.4 - Test if the application is redirected to the Not Found page', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/not-found');
    expect(getByText('Page requested not found')).toBeInTheDocument();
  });
});
