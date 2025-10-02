// File: src/lib/setupMsw.ts

/**
 * Helper function to ensure MSW is properly set up
 */
export async function setupMsw() {
  try {
    // Import the worker
    const { worker } = await import('../mocks/browser');
    
    // Start the worker with custom options
    await worker.start({
      onUnhandledRequest: 'warn',
      serviceWorker: {
        url: '/mockServiceWorker.js',
        options: {
          scope: '/'
        }
      }
    });
    
    console.info('MSW setup complete. API mocking is active.');
    return true;
  } catch (error) {
    console.error('Failed to setup MSW:', error);
    return false;
  }
}

export default setupMsw;
