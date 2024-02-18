# Koda Software Monitoring Library

A monitoring library for integrating monitoring and observability platforms and generating logs for monitoring.

## How to use the library

To install this library follow the steps below:

```bash
npm add @kodasoftware/monitoring
```

Once installed you can use the library to do the following:

`logger.ts`

```typescript
import { createLogger } from '@kodasoftware/monitoring';

export const logger = createLogger({ name: process.env.HOSTNAME, logLevel: process.env.LOG_LEVEL });

```

Enjoy!
