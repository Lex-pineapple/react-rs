import { formInputReducer } from '../src/store/reducers/formInputReducer';

describe('test reducer', () => {
  const initialState = {
    name: '',
    date: '',
    breed: '',
    sex: '',
    tags: [],
    file: '',
  };
  test('should set correct values', () => {
    expect(formInputReducer(initialState, { type: 'form/set-name', payload: 'test-name' })).toEqual(
      {
        name: 'test-name',
        date: '',
        breed: '',
        sex: '',
        tags: [],
        file: '',
      }
    );
    expect(
      formInputReducer(initialState, { type: 'form/set-date', payload: '0000-00-00' })
    ).toEqual({
      name: '',
      date: '0000-00-00',
      breed: '',
      sex: '',
      tags: [],
      file: '',
    });
    expect(formInputReducer(initialState, { type: 'form/set-breed', payload: 'other' })).toEqual({
      name: '',
      date: '',
      breed: 'other',
      sex: '',
      tags: [],
      file: '',
    });
    expect(formInputReducer(initialState, { type: 'form/set-sex', payload: 'sex' })).toEqual({
      name: '',
      date: '',
      breed: '',
      sex: 'sex',
      tags: [],
      file: '',
    });
    expect(
      formInputReducer(initialState, { type: 'form/set-tags', payload: ['test1', 'test2'] })
    ).toEqual({
      name: '',
      date: '',
      breed: '',
      sex: '',
      tags: ['test1', 'test2'],
      file: '',
    });
    expect(
      formInputReducer(initialState, { type: 'form/set-file', payload: '//fakefile' })
    ).toEqual({
      name: '',
      date: '',
      breed: '',
      sex: '',
      tags: [],
      file: '//fakefile',
    });
    expect(formInputReducer(initialState, { type: 'form/unknown', payload: '' })).toEqual({
      name: '',
      date: '',
      breed: '',
      sex: '',
      tags: [],
      file: '',
    });
  });
});
