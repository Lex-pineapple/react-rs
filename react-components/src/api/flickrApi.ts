import * as rtkQuery from '@reduxjs/toolkit/dist/query/react/index.js';

import createApi from './createApi';

type TypeRtkQuery = typeof rtkQuery & { default?: unknown };
const { fetchBaseQuery } = ((rtkQuery as TypeRtkQuery).default ?? rtkQuery) as typeof rtkQuery;

export const flickrApi = createApi({
  reducerPath: 'flickrApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.flickr.com/services/rest' }),
  endpoints: (builder) => ({
    getSearchResults: builder.query({
      query: (arg) => ({
        url: '',
        params: { ...arg },
      }),
      transformErrorResponse: (response: { status: string | number }, meta, arg) => response.status,
    }),
    getPhotoInfo: builder.query({
      query: (arg) => ({
        url: '',
        params: { ...arg },
      }),
    }),
  }),
});

export const { useGetSearchResultsQuery, useGetPhotoInfoQuery } = flickrApi;