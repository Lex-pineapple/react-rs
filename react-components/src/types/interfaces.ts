import { ChangeEvent } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface ISearchProps {
  keyword: string;
  handler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ICardProps {
  name: string;
  date: string;
  breed: string;
  sex: string;
  tags: string[];
  file: string;
  author: string;
  views: number;
  likes: number;
}

export interface IForm {
  name: string;
  date: string;
  breed: string;
  sex: string;
  tags: string[];
  file: FileList;
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

export interface IValidationMessage {
  nameInput: string;
  dateInput: string;
  checkboxInput: string;
  fileInput: string;
}

export interface IValidationResult {
  valid: boolean;
  details: IValidationMessage;
}

export interface IInputProps {
  register: UseFormRegister<FieldValues>;
  name: string;
  label: string;
  type: string;
  className: string;
}

export interface IValidatedInputProps {
  register: UseFormRegister<FieldValues>;
  name: string;
  label: string;
  validationDetails: {
    validationName: string;
    validationData: string;
  };
  type: string;
  className: string;
}

export interface IRadioInputProps {
  register: UseFormRegister<FieldValues>;
  name: string;
  label: string;
}

export interface IValidatedRadioInputProps {
  register: UseFormRegister<FieldValues>;
  name: string;
  label: string;
  validationDetails: {
    validationName: string;
    validationData: string;
  };
}
