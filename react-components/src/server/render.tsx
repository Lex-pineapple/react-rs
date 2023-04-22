import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { renderToPipeableStream } from 'react-dom/server';

export default function render(store, options) {
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  return stream;
}
