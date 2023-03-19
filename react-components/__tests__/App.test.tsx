import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App';
import '@testing-library/jest-dom/extend-expect';

test('renders the landing page', () => {
  render(<App />);
  const headerItems = screen.getAllByRole('img');
  for (let i = 0; i < 6; i++) {
    expect(headerItems[i]).toBeInTheDocument();
  }
});
