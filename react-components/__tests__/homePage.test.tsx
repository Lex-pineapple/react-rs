import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../src/routes/homePage';
import 'jest-localstorage-mock';
import { Provider } from 'react-redux';
// import store from '../src/store/store';
import { createStore } from '../src/store/store';

const store = createStore({});

describe('HomePage bar rendering', () => {
  test('renders the home page', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  });

  test('check if search bar is empty', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const searchBar = screen.getByTestId('searchbar') as HTMLInputElement;
    expect(searchBar.value).toBe('');
  });

  test('check for search bar input', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const searchBar = screen.getByTestId('searchbar') as HTMLInputElement;
    fireEvent.change(searchBar, { target: { value: 'test input' } });
    expect(searchBar.value).toBe('test input');
  });
});

describe('Card data API', () => {
  test('data is fetched correctly and cards are displayed', async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const searchBar = screen.getByTestId('searchbar') as HTMLInputElement;
    const searchIcon = screen.getByTestId('searchbar-icon');
    const loader = screen.getByTestId('loader-container');
    fireEvent.change(searchBar, { target: { value: 'test input' } });
    fireEvent.click(searchIcon);
    await waitFor(() => {
      expect(loader).toBeInTheDocument();
    });
    await waitFor(async () => {
      const cardsContainer = screen.getByTestId('cards-container');
      expect(cardsContainer).toBeInTheDocument();
      const cards = screen.getAllByTestId('card');
      fireEvent.click(cards[0]);
    });

    await waitFor(() => {
      const modal = screen.getByTestId('card-modal-title');
      expect(modal).toBeInTheDocument();
    });
  });

  test('simulate keypress', async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const searchBar = screen.getByTestId('searchbar') as HTMLInputElement;
    fireEvent.change(searchBar, { target: { value: 'test input' } });
    fireEvent.keyDown(searchBar, { key: 'Enter', charCode: 13 });
  });
});
