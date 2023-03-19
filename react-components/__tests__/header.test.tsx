import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../src/components/header';
import '@testing-library/jest-dom/extend-expect';

test('renders the header', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const headerItems = screen.getAllByRole('link');
  expect(headerItems[0]).toHaveTextContent('Home');
  expect(headerItems[1]).toHaveTextContent('About');
});
