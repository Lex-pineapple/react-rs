import { ChangeEvent } from 'react';

export interface ISearchProps {
  keyword: string;
  handler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ICardProps {
  image: string;
  date: string;
  sex: string;
  breed: string;
  author: string;
  cardName: string;
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

export interface IInputProps {
  label: string;
  labelFor: string;
  type: string;
  input: React.RefObject<HTMLInputElement>;
  validationName?: string;
  validationData?: string;
  accept?: string;
}

export interface ISelectProps {
  label: string;
  type: string;
  input: React.RefObject<HTMLSelectElement>;
}
