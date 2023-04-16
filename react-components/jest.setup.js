import 'whatwg-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MockSearchResponse } from './__tests__/__mocks__/mockSearchResponse';
import { MockCardResponse } from './__tests__/__mocks__/mockCardResponse';

const server = setupServer(
  rest.get('https://api.flickr.com/services/rest', (req, res, ctx) => {
    if (req.url.searchParams.get('method') == 'flickr.photos.getInfo') {
      return res(ctx.status(200), ctx.json(MockCardResponse));
    }
    return res(ctx.status(200), ctx.json(MockSearchResponse));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
