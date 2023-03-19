import { ChangeEvent } from 'react';

export interface ISearchProps {
  keyword: string;
  handler: (event: ChangeEvent<HTMLInputElement>) => void;
}
