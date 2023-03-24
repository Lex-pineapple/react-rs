import DateInput from 'components/form-components/dateInput';
import TextInput from 'components/form-components/textInput';
import { ChangeEvent } from 'react';

export interface ISearchProps {
  keyword: string;
  handler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ICardProps {
  author: string;
  cardName: string;
  views: number;
  likes: number;
  tags: string[];
}

export interface ITxtInputProps {
  label: string;
}

export interface IDateInputProps {
  label: string;
}
