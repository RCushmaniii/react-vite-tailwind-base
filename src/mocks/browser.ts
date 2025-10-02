// File: src/mocks/browser.ts
import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// This configures a Service Worker with the request handlers we defined in handlers.ts
export const worker = setupWorker(...handlers)

