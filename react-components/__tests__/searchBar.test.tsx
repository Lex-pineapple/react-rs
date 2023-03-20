import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../src/components/searchBar';
import 'jest-localstorage-mock';

it('renders the searchBar', () => {
  render(<SearchBar />);
});

it('check if search bar is empty', () => {
  render(<SearchBar />);
  const searchBar = screen.getByRole('textbox') as HTMLInputElement;
  expect(searchBar.value).toBe('');
});

it('check for search bar input', () => {
  render(<SearchBar />);
  const searchBar = screen.getByRole('textbox') as HTMLInputElement;
  fireEvent.change(searchBar, { target: { value: 'test input' } });
  expect(searchBar.value).toBe('test input');
});
