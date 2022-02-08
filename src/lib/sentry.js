import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn:
      'https://dbcd6399565348bcbefcd1f10ce26e8a@o1114542.ingest.sentry.io/6145818',
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
    release: process.env.REACT_APP_SENTRY_RELEASE
  })
}
