import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../src/routes/homePage';
import 'jest-localstorage-mock';

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
