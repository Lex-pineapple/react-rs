import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from '../src/store/store';
import { Provider } from 'react-redux';

const store = createStore({});
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

  test('check if input is saved between locations', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const searchBar = screen.getByTestId('searchbar') as HTMLInputElement;
    fireEvent.change(searchBar, { target: { value: 'test input' } });
    expect(searchBar.value).toBe('test input');
    const headerLinkHome = screen.getByTestId('header-link-home');
    const headerLinkAbout = screen.getByTestId('header-link-about');

    fireEvent.click(headerLinkAbout);
    const aboutHeader = screen.getByTestId('about-header');
    expect(aboutHeader).toBeInTheDocument();
    fireEvent.click(headerLinkHome);
    expect(searchBar.value).toEqual('test input');
  });
});
