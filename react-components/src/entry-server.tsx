import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { createStore } from './store/store';
import Html from './Html';
import App from './App';

const store = createStore({});

export function render(url: string, options: ReactDOMServer.RenderToPipeableStreamOptions) {
  const stream = ReactDOMServer.renderToPipeableStream(
    <Html preloadedState={store.getState()}>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </Html>,
    options
  );
  return stream;
}
