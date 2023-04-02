import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Page404 from '../src/routes/page404';
import { BrowserRouter } from 'react-router-dom';

describe('Page404 rendering', () => {
  test('renders the 404 page', () => {
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>
    );
  });
});
