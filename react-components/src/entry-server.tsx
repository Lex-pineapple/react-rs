import App from './App';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import store from './store/store';
import { Provider } from 'react-redux';

interface IRenderProps {
  path: string;
}

export function render(url: string) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>
  );
  const preloadedState = store.getState();
  return { html, preloadedState };
}
