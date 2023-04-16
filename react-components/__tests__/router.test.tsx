import React from 'react';
import App from '../src/App';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store/store';

describe('Router changes Header', () => {
  test('header should change on header link click', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('header-header').textContent).toBe('Home');

    const aboutBtn = screen.getByTestId('header-link-about');
    fireEvent.click(aboutBtn);
    expect(screen.getByTestId('header-header').textContent).toBe('About');

    const formBtn = screen.getByTestId('header-link-form');
    fireEvent.click(formBtn);
    expect(screen.getByTestId('header-header').textContent).toBe('Form');
  });
  test('header should match 404 header', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/unknown']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('header-header').textContent).toBe('Not Found');
  });
});
