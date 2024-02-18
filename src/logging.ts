import Pino from 'pino';

export type { Logger } from 'pino';

export type LogLevel =
  | 'fatal'
  | 'error'
  | 'warn'
  | 'info'
  | 'debug'
  | 'trace'
  | 'silent';

export function createLogger(opts: {
  name: string;
  logLevel: LogLevel;
  browser?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  base?: { [key: string]: any };
}) {
  return Pino({
    name: opts.name,
    safe: true,
    level: opts.logLevel,
    // nestedKey: 'properties',
    base: opts.base,
    ...(opts.browser ? { browser: { asObject: true } } : {}),
  });
}
