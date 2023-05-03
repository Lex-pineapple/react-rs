import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import React, { ChangeEvent } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

export interface ISearchProps {
  handleKey: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleClick: () => void;
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

export interface ISimpleCardProps {
  id: number;
  file: string;
  date: string;
  name: string;
  handleClick: (id: number) => void;
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

export interface ISelectorInput {
  register: UseFormRegister<FieldValues>;
  name: string;
  className: string;
  id: string;
  value: string;
  type: string;
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

export interface IPhotoResponse {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

export interface IModalProps {
  handleClose: () => void;
  show: boolean;
}

export interface ICardModalProps extends IModalProps {
  info: { id: string } | null;
}

export interface ISearchResultProps {
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoaded: boolean;
  items: ISearchResponse;
}

export interface ISearchResponse {
  photos: ISearchPhotoResponse;
  stat: string;
}

export interface ISearchPhotoResponse {
  page: number;
  pages: number;
  perpage: number;
  photo: IPhotoResponse[];
  total: number;
}

export interface IPhotoInfoResponse {
  photo: IPhotoInfo;
  stat: string;
}

export interface IPhotoInfo {
  id: string;
  secret: string;
  server: string;
  farm: number;
  dateuploaded: string;
  isfavorite: number;
  license: string;
  safety_level: string;
  rotation: number;
  owner: {
    nsid: string;
    username: string;
    realname: string;
    location: null;
    iconserver: string;
    iconfarm: number;
    path_alias: string;
    gift: {
      gift_eligible: boolean;
      eligible_durations: string[];
      new_flow: boolean;
    };
  };
  title: {
    _content: string;
  };
  description: {
    _content: string;
  };
  visibility: {
    ispublic: number;
    isfriend: number;
    isfamily: number;
  };
  dates: {
    posted: string;
    taken: string;
    takengranularity: number;
    takenunknown: string;
    lastupdate: string;
  };
  views: string;
  editability: {
    cancomment: number;
    canaddmeta: number;
  };
  publiceditability: {
    cancomment: number;
    canaddmeta: number;
  };
  usage: {
    candownload: number;
    canblog: number;
    canprint: number;
    canshare: number;
  };
  comments: {
    _content: string;
  };
  notes: {
    note: [];
  };
  people: {
    haspeople: number;
  };
  tags: {
    tag: IPhotoInfoTag[];
  };
  urls: {
    url: {
      type: string;
      _content: string;
    }[];
  };
  media: string;
}

export interface IPhotoInfoTag {
  id: string;
  author: string;
  authorname: string;
  raw: string;
  _content: string;
  machine_tag: boolean;
}

export interface IState {
  search: { searchValue: string; submittedValue: string };
  formInput: IFormInputState;
  formData: ICardProps[];
}

export interface IFormInputState {
  name: string;
  date: string;
  breed: string;
  sex: string;
  tags: string[];
  file: string;
}
