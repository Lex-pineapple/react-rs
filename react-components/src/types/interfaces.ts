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

export interface IInputProps {
  label: string;
  type: string;
  input: React.RefObject<HTMLInputElement>;
}

export interface ISelectProps {
  label: string;
  type: string;
  input: React.RefObject<HTMLSelectElement>;
}
