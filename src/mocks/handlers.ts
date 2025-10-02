// File: src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

// Import the example handlers directly
import { HttpHandler } from 'msw';
import { exampleHandlers } from '../examples/exampleHandlers';

// Make sure we have a valid array of handlers
const importedExampleHandlers: HttpHandler[] = Array.isArray(exampleHandlers) ? exampleHandlers : [];

// Core handlers for the application
const coreHandlers = [
  // Intercept "GET /api/user" requests
  http.get('/api/user', () => {
    const user = {
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    };
    
    // Use HttpResponse.json for a concise and correct JSON response.
    return HttpResponse.json(user);
  }),
];

// Export all handlers
export const handlers = [
  ...coreHandlers,
  ...importedExampleHandlers,
];

// Note: To add the example handlers from src/examples/exampleHandlers.ts,
// update the import at the top of this file.

