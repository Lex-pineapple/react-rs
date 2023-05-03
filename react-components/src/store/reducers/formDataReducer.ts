import { AnyAction } from '@reduxjs/toolkit';
import { ICardProps } from '../../types/interfaces';

const initialState: ICardProps[] = [];

export function formDataReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case 'form/setFormData': {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}
