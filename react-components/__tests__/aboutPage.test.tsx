import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import AboutPage from '../src/routes/aboutPage';

describe('About page rendering', () => {
  test('renders the about page', () => {
    render(<AboutPage />);
  });
});
