import fs from 'node:fs/promises';
import express from 'express';
import { ViteDevServer } from 'vite';

// Constants
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

// Cached production assets
const templateHtml = isProduction ? await fs.readFile('./dist/client/index.html', 'utf-8') : '';
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/ssr-manifest.json', 'utf-8')
  : undefined;

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite: ViteDevServer;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;
  app.use(compression());
  app.use(base, sirv('./dist/client', { extensions: [] }));
}

// Serve HTML
app.use('*', async (req: express.Request, res: express.Response) => {
  try {
    const url = req.originalUrl;
    let template: string;
    let render;
    if (!isProduction) {
      template = await fs.readFile('./index.html', 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
    } else {
      template = templateHtml;
      // render = (await import('./dist/server/entry-server.js')).render;
    }
    const parts = template.split('<!--app-html-->');

    const bootStrap = './src/entry-client.tsx';
    const stream = await render(url, {
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/html');
        stream.pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.send('<h1>Something went wrong</h1>');
      },
      onAllReady() {
        res.write(parts[1]);
        res.end();
      },
      onError(error: Error) {
        if (error) {
          console.error(error);
        }
      },
      bootstrapModules: [bootStrap],
    });

  } catch (e) {
    if (e instanceof Error) {
      vite?.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
