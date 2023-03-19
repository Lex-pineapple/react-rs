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