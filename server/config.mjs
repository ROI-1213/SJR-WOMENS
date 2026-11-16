import { copyFileSync, existsSync, readFileSync } from 'node:fs';
import { parseEnv } from 'node:util';

const envPath = new URL('../.env', import.meta.url);
const envExamplePath = new URL('../.env.example', import.meta.url);

export const normalizeHostname = (raw = '') => {
  let value = String(raw).trim().toLowerCase();
  if (!value) return '';
  if (value === '*' || value === 'all' || value === 'true') return '*';
  value = value.replace(/^[a-z]+:\/\//i, '');
  value = value.split('/')[0];
  if (value.startsWith('[')) {
    const closeIdx = value.indexOf(']');
    if (closeIdx !== -1) return value.slice(1, closeIdx);
  } else if (value.includes(':')) {
    value = value.split(':')[0];
  }
  return value.replace(/\.$/, '');
};

export function isHostAllowed(hostname, allowedHosts) {
  if (allowedHosts === true) return true;
  const normalized = normalizeHostname(hostname);
  if (!normalized) return false;
  if (normalized === 'localhost' || normalized === '127.0.0.1' || normalized === '::1') return true;
  if (!Array.isArray(allowedHosts) || allowedHosts.length === 0) return true;

  for (const pattern of allowedHosts) {
    if (pattern === '*') return true;
    const cleanPattern = pattern.startsWith('*.') ? pattern.slice(1) : pattern;
    if (cleanPattern.startsWith('.')) {
      const base = cleanPattern.slice(1);
      if (normalized === base || normalized.endsWith(cleanPattern)) return true;
    } else if (normalized === cleanPattern) {
      return true;
    }
  }
  return false;
}

export function readServerConfig() {
  if (!existsSync(envPath) && existsSync(envExamplePath)) {
    try {
      copyFileSync(envExamplePath, envPath);
    } catch {
      // Ignore if read-only filesystem
    }
  }

  let settings = {};
  if (existsSync(envPath)) {
    const contents = readFileSync(envPath, 'utf8');
    settings = parseEnv(contents);
  } else if (existsSync(envExamplePath)) {
    const contents = readFileSync(envExamplePath, 'utf8');
    settings = parseEnv(contents);
  }

  const rawPort = settings.PORT || process.env.PORT || '8123';
  const port = Number(rawPort);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('Set PORT in .env to a valid port number (1-65535).');
  }

  const host = (settings.HOST || process.env.HOST || '127.0.0.1').trim();

  const rawAllowed = settings.ALLOWED_HOSTS ?? process.env.ALLOWED_HOSTS ?? '*';
  const parsedHosts = [...new Set(rawAllowed.split(',').map(normalizeHostname).filter(Boolean))];

  const allowAll = parsedHosts.length === 0 || parsedHosts.includes('*');
  const allowedHosts = allowAll
    ? true
    : parsedHosts.map(h => (h.startsWith('*.') ? h.slice(1) : h));

  return { host, port, allowedHosts };
}
