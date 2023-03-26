import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import FormPage from '../src/routes/formPage';

test('renders the landing page', () => {
  render(<FormPage />);
});
