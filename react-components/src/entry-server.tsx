import ReactDOMServer from 'react-dom/server';
import Html from './Html';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
export function render(url, options) {
  // const preloadedState = store.getState();
  const stream = ReactDOMServer.renderToPipeableStream(
    <Html>
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
