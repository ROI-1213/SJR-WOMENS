import { existsSync } from 'node:fs';
import { extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { normalizeHostname, readServerConfig } from './config.mjs';
import { contactApp } from './contact.mjs';

const { host, port, allowedHosts } = readServerConfig();
const dist = fileURLToPath(new URL('../dist/', import.meta.url));
if (!existsSync(new URL('../dist/index.html', import.meta.url))) {
  throw new Error('Build the site with npm run build before starting the server.');
}

const app = express();
const trustedHosts = new Set(['localhost', '127.0.0.1', '::1', ...allowedHosts]);
app.disable('x-powered-by');
app.use((request, response, next) => {
  // Express uses the Host header here because proxy trust is disabled.
  if (!request.hostname || !trustedHosts.has(normalizeHostname(request.hostname))) {
    return response.status(403).type('text').send('Host is not allowed. Configure ALLOWED_HOSTS in .env.');
  }
  next();
});

app.use('/api/contact', contactApp);
app.use(express.static(dist, { index: false, redirect: false }));
app.get(/.*/, (request, response, next) => {
  if (extname(request.path) || request.path.split('/').some(segment => segment.startsWith('.')) || !request.accepts('html')) return next();
  response.set('Cache-Control', 'no-cache').sendFile('index.html', { root: dist });
});

const server = app.listen(port, host);
server.on('listening', () => console.log(`Site listening on http://${host.includes(':') ? `[${host}]` : host}:${port}`));
server.on('error', error => {
  console.error(error.message);
  process.exitCode = 1;
});
