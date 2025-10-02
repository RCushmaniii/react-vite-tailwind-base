// File: src/lib/checkMsw.ts

/**
 * Helper function to check if MSW is properly installed and running
 */
export function checkMswStatus() {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;
  
  // Check if the MSW service worker is registered
  const isMswActive = 'msw' in window;
  
  console.info(`MSW Status: ${isMswActive ? 'Active' : 'Inactive'}`);
  
  if (!isMswActive) {
    console.warn('MSW is not active. API mocking will not work.');
    console.info('Try the following:');
    console.info('1. Make sure MSW is enabled in your environment variables');
    console.info('2. Check if the service worker is properly registered');
    console.info('3. Reload the page to initialize MSW');
  } else {
    console.info('MSW is active and ready to intercept API requests.');
  }
  
  return isMswActive;
}

export default checkMswStatus;
