import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import FormPage from '../src/routes/formPage';
import InputValidator from '../src/helpers/inputValidator';
import CardsContainer from '../src/components/cardsContainer';

it('renders the form page', () => {
  render(<FormPage />);
});

describe('file upload and validation', () => {
  let file;
  const inputValidator = new InputValidator();
  // global.URL.createObjectURL = jest.fn();
  const mockValidationResult = {
    valid: true,
    details: {
      nameInput: true,
      dateInput: true,
      checkboxInput: true,
      fileInput: true,
    },
  };
  if (typeof window.URL.createObjectURL === 'undefined') {
    window.URL.createObjectURL = jest.fn();
  }

  beforeEach(() => {
    file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
  });

  test('validates the form page correctly', async () => {
    render(<FormPage />);
    const nameInput = screen.getByLabelText('Name of the cat:') as HTMLInputElement;
    const dateInput = screen.getByLabelText('Date of birth:') as HTMLInputElement;
    const checkboxInput = screen.getByLabelText('Friendly') as HTMLInputElement;
    const fileInput = screen.getByLabelText('Upload photo:') as HTMLInputElement;
    const submit = screen.getByDisplayValue('Submit');

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
    fireEvent.change(checkboxInput, {
      target: {
        checked: true,
      },
    });
    await waitFor(() => {
      fireEvent.change(fileInput, {
        target: { files: [file] },
      });
    });
    const validationResult = inputValidator.validateSubmit({
      nameInput,
      dateInput,
      checkboxInput: [checkboxInput],
      fileInput,
    });
    fireEvent.submit(submit);
    expect(validationResult).toEqual(mockValidationResult);
  });
});

describe('validation error', () => {
  const inputValidator = new InputValidator();
  // global.URL.createObjectURL = jest.fn();
  const mockValidationResult = {
    valid: false,
    details: {
      nameInput: false,
      dateInput: false,
      checkboxInput: false,
      fileInput: false,
    },
  };
  if (typeof window.URL.createObjectURL === 'undefined') {
    window.URL.createObjectURL = jest.fn();
  }

  test('validates the form page correctly', async () => {
    render(<FormPage />);
    const nameInput = screen.getByLabelText('Name of the cat:') as HTMLInputElement;
    const dateInput = screen.getByLabelText('Date of birth:') as HTMLInputElement;
    const checkboxInput = screen.getByLabelText('Friendly') as HTMLInputElement;
    const fileInput = screen.getByLabelText('Upload photo:') as HTMLInputElement;
    const submit = screen.getByDisplayValue('Submit');

    fireEvent.change(nameInput, {
      target: {
        value: 'a',
      },
    });
    fireEvent.change(dateInput, {
      target: {
        value: '0020-12-12',
      },
    });
    fireEvent.change(checkboxInput, {
      target: {
        checked: false,
      },
    });
    // await waitFor(() => {
    //   fireEvent.change(fileInput, {
    //     target: { files: [file] },
    //   });
    // });
    // fileInput.files = file;
    // console.log(fileInput.files.length);

    const validationResult = inputValidator.validateSubmit({
      nameInput,
      dateInput,
      checkboxInput: [checkboxInput],
      fileInput,
    });
    fireEvent.submit(submit);
    expect(validationResult).toEqual(mockValidationResult);
  });
});

describe('cards are created', () => {
  const cardData = {
    image: '../src/assets/lycanCat.jpeg',
    date: '2022-02-03',
    sex: 'Girl',
    breed: 'Cat',
    author: 'admin',
    cardName: 'name',
    views: 0,
    likes: 0,
    tags: ['friendly'],
  };

  render(<CardsContainer cards={[cardData]} />);
});
