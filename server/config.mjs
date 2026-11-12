import { readFileSync } from 'node:fs';
import { isIP } from 'node:net';
import { parseEnv } from 'node:util';

export const normalizeHostname = hostname => hostname.trim().toLowerCase().replace(/\.$/, '').replace(/^\[(.+)\]$/, '$1');

export function readServerConfig() {
  let contents;
  try {
    contents = readFileSync(new URL('../.env', import.meta.url), 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') throw new Error('Create .env from .env.example before starting the server.');
    throw error;
  }

  const settings = parseEnv(contents);
  const port = Number(settings.PORT);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('Set PORT in .env to a valid port number.');
  }

  const allowedHosts = [...new Set((settings.ALLOWED_HOSTS ?? '').split(',').map(normalizeHostname).filter(Boolean))];
  const validLabel = /^[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?$/;
  if (allowedHosts.some(host => !isIP(host) && (host.length > 253 || !host.split('.').every(label => validLabel.test(label))))) {
    throw new Error('Set ALLOWED_HOSTS in .env to comma-separated hostnames without schemes, ports, or wildcards.');
  }

  return { host: settings.HOST?.trim() || '127.0.0.1', port, allowedHosts };
}
