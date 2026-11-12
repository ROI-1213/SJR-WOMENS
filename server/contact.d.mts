import type { IncomingMessage, ServerResponse } from 'node:http';

export const contactApp: (request: IncomingMessage, response: ServerResponse, next: (error?: unknown) => void) => void;
