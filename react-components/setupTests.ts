// import 'whatwg-fetch';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import { MockSearchResponse } from './__tests__/__mocks__/mockSearchResponse';

// const server = setupServer(
//   rest.get('https://api.flickr.com/services/rest/', (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json(MockSearchResponse));
//   })
// );

// beforeAll(() => server.listen());
// afterAll(() => server.close());
// afterEach(() => server.resetHandlers());
