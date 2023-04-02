import { ChangeEvent } from 'react';

export interface ISearchProps {
  keyword: string;
  handler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ICardProps {
  file: {
    value: string;
    parsedValue: string;
  };
  date: string;
  sex: string;
  breed: string;
  author?: string;
  name: string;
  views?: number;
  likes?: number;
  tags: boolean[];
}

export interface IForm {
  file: string;
  date: string;
  sex: string;
  breed: string;
  author: string;
  name: string;
  views: number;
  likes: number;
  tags: string[];
}

export interface IValidationData {
  nameInput: HTMLInputElement;
  dateInput: HTMLInputElement;
  checkboxInput: HTMLInputElement[];
  fileInput: HTMLInputElement;
}

export interface IInputData {
  nameInput: HTMLInputElement;
  dateInput: HTMLInputElement;
  selectInput: HTMLSelectElement;
  checkboxInput: HTMLInputElement[];
  radioInput: HTMLInputElement;
  fileInput: HTMLInputElement;
}

export interface IValidationDetails {
  nameInput: boolean;
  dateInput: boolean;
  checkboxInput: boolean;
  fileInput: boolean;
}

export interface IValidationResult {
  valid: boolean;
  details: IValidationDetails;
}

export interface IInputProps<T, E> {
  label: string;
  name: string;
  type: string;
  input: T;
  className: string;
  validationName?: string;
  validationData?: string;
  accept?: string;
  onChange: (e: ChangeEvent<E>) => void;
}
