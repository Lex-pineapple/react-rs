import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store/store';

describe('Main page rendering', () => {
  test('renders the landing page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const searchBar = screen.getByTestId('searchbar') as HTMLInputElement;
    expect(searchBar).toBeInTheDocument();
  });

  test('renders the header elements', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const headerItems = screen.getAllByRole('link');
    expect(headerItems[0]).toHaveTextContent('Home');
    expect(headerItems[1]).toHaveTextContent('About');
  });
});
