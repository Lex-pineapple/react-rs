import { AnyAction } from '@reduxjs/toolkit';

const initialState = { searchValue: '', submittedValue: '' };

export default function searchReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case 'search/setSearchState': {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    case 'search/setSubmittedSearch': {
      return {
        ...state,
        submittedValue: action.payload,
      };
    }
    default:
      return state;
  }
}
