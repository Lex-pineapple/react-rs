// import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as rtkQuery from '@reduxjs/toolkit/dist/query/react/index';
import { buildCreateApi, coreModule, reactHooksModule } from '@reduxjs/toolkit/query/react';
const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);
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
