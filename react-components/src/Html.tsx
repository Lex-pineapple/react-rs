import { ReactNode } from 'react';
import { RootState } from './store/store';
import refreshScript from './refresh-script.js?raw';

interface IHtmlProps {
  children: ReactNode;
  preloadedState: RootState;
}

function Html({ children, preloadedState }: IHtmlProps) {
  let viteScripts = <></>;
  if (import.meta.env.DEV) {
    viteScripts = (
      <>
        <script type="module" src="/@vite/client" />
        <script type="module" dangerouslySetInnerHTML={{ __html: refreshScript }} />
      </>
    );
  }
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        {viteScripts}
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite + React + TS</title>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}`,
        }}
      />
    </html>
  );
}

export default Html;
