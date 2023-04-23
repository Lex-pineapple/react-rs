import Html from './Html';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';

export default function renderFullPage(url, options, data, store) {
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
