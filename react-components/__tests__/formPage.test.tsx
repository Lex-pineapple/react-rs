import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import FormPage from '../src/routes/formPage';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
// import store from '../src/store/store';
import { createStore } from '../src/store/store';

const store = createStore({});
describe('Form page rendering', () => {
  test('renders the form page', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
  });
});

describe('File upload and validation', () => {
  let file: File;
  if (typeof window.URL.createObjectURL === 'undefined') {
    window.URL.createObjectURL = jest.fn();
  }

  beforeEach(() => {
    file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
  });

  test('the validation should pass', async () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const nameInput = screen.getByLabelText('Name of the cat:') as HTMLInputElement;
    const dateInput = screen.getByLabelText('Date of birth:') as HTMLInputElement;
    const checkboxInput = screen.getByLabelText('Friendly') as HTMLInputElement;
    const fileInput = screen.getByLabelText('Upload photo:') as HTMLInputElement;
    const submit = screen.getByDisplayValue('Submit');

    await act(async () => {
      fireEvent.change(nameInput, {
        target: {
          value: 'asdfbn',
        },
      });
      fireEvent.change(dateInput, {
        target: {
          value: '2000-12-12',
        },
      });
      fireEvent.click(checkboxInput);
      await waitFor(() => {
        fireEvent.change(fileInput, {
          target: { files: [file] },
        });
      });
      fireEvent.submit(submit);
    });

    expect(screen.getByTestId('modal-window')).toHaveClass('modal-container display-block');
    const modalCloseBtn = screen.getByTestId('modal-close-btn');
    fireEvent.click(modalCloseBtn);
    expect(screen.getByTestId('modal-window')).toHaveClass('modal-container display-none');

    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  test('the validation should fail', async () => {
    const validationErrorMsg = {
      name: 'The name must be longer than 3 symbols',
      date: 'The year must be after 1990',
      checkbox: 'Check at least one checkbox',
      file: 'Please choose an image file',
    };
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const nameInput = screen.getByLabelText('Name of the cat:') as HTMLInputElement;
    const dateInput = screen.getByLabelText('Date of birth:') as HTMLInputElement;
    const submit = screen.getByDisplayValue('Submit');

    await act(async () => {
      fireEvent.change(nameInput, {
        target: {
          value: 'as',
        },
      });
      fireEvent.change(dateInput, {
        target: {
          value: '1850-12-12',
        },
      });
      fireEvent.submit(submit);
    });

    expect(screen.getByText(validationErrorMsg.name).textContent).toBe(validationErrorMsg.name);
    expect(screen.getByText(validationErrorMsg.date).textContent).toBe(validationErrorMsg.date);
    expect(screen.getByText(validationErrorMsg.checkbox).textContent).toBe(
      validationErrorMsg.checkbox
    );
    expect(screen.getByText(validationErrorMsg.file).textContent).toBe(validationErrorMsg.file);
  });
});
