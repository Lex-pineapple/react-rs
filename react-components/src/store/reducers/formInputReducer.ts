import { AnyAction } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  date: '',
  breed: '',
  sex: '',
  tags: [],
  file: '',
};

export function formInputReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case 'form/set-name': {
      return {
        ...state,
        name: action.payload,
      };
    }
    case 'form/set-date': {
      return {
        ...state,
        date: action.payload,
      };
    }
    case 'form/set-breed': {
      return {
        ...state,
        breed: action.payload,
      };
    }
    case 'form/set-sex': {
      return {
        ...state,
        sex: action.payload,
      };
    }
    case 'form/set-file': {
      return {
        ...state,
        file: action.payload,
      };
    }
    case 'form/set-tags': {
      return {
        ...state,
        tags: action.payload,
      };
    }
    default:
      return state;
  }
}
