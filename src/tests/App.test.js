import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('1 - Teste o Componente <App.js /> ', () => {
  test('shows the Pokédex when the route is `/`', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText('Home'));
    const routeHome = history.location.pathname;
    expect(routeHome).toBe('/');
  });
});
