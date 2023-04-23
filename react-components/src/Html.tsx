import { ReactNode } from 'react';
import refreshScript from './refresh-script.js?raw';

interface IHtmlProps {
  children: ReactNode;
}

function Html({ children }: IHtmlProps) {
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
        {/* <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script> */}
      </body>
    </html>
  );
}

export default Html;
