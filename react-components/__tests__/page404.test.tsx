import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Page404 from '../src/routes/page404';

test('renders the landing page', () => {
  render(<Page404 />);
});
