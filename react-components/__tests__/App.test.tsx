import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';

describe('Main page rendering', () => {
  test('renders the landing page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const searchBar = screen.getByTestId('searchbar') as HTMLInputElement;
    expect(searchBar).toBeInTheDocument();
  });

  test('renders the header elements', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const headerItems = screen.getAllByRole('link');
    expect(headerItems[0]).toHaveTextContent('Home');
    expect(headerItems[1]).toHaveTextContent('About');
  });
});
