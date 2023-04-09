import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../src/routes/homePage';
import 'jest-localstorage-mock';

import 'whatwg-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MockSearchResponse } from './__mocks__/mockSearchResponse';
import { MockCardResponse } from './__mocks__/mockCardResponse';

const server = setupServer(
  rest.get('https://api.flickr.com/services/rest/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MockSearchResponse));
  })
);

describe('HomePage bar rendering', () => {
  test('renders the home page', () => {
    render(<HomePage />);
  });

  test('check if search bar is empty', () => {
    render(<HomePage />);
    const searchBar = screen.getByTestId('searchbar') as HTMLInputElement;
    expect(searchBar.value).toBe('');
  });

  test('check for search bar input', () => {
    render(<HomePage />);
    const searchBar = screen.getByTestId('searchbar') as HTMLInputElement;
    fireEvent.change(searchBar, { target: { value: 'test input' } });
    expect(searchBar.value).toBe('test input');
  });

  test('check if input is saved to localStorage', () => {
    expect(localStorage.getItem('searchItem44582')).toEqual('test input');
  });
});

describe('Card data API', () => {
  test('data is fetched correctly and cards are displayed', async () => {
    render(<HomePage />);
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
    // userEvent.keyboard('[Enter]');
  });

  // test('handles failure', async () => {
  //   server.use(
  //     rest.get('https://api.flickr.com/services/rest/', (req, res, ctx) => {
  //       return res(ctx.status(404), ctx.json({ error: 'error' }));
  //     })
  //   );
  //   await waitFor(() => {
  //     const errorContainer = screen.getByTestId('error-container');
  //     expect(errorContainer).toBeInTheDocument();
  //   });
  // });

  // test('should fetch', async () => {
  //   const result = await fetch(
  //     `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b158ecdf6b84a3ae427372f61ddab5b7&text=kitten&per_page=10&format=json&nojsoncallback=1`
  //   );
  //   console.log(result);

  // });
});
