import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://deb68f0b7fb67cb95621049203c6f024@o4508142883897344.ingest.de.sentry.io/4508142890909776',

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
