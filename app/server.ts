// server.ts
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(
    '/farmers',
    createProxyMiddleware({
      target: 'https://stutern-klusterthon.onrender.com', // Replace with your backend URL
      changeOrigin: true,
    }),
  );

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
