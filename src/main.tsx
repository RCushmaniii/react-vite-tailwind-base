import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

async function enableMocking() {
  // For the template, we'll enable MSW by default for demonstration purposes
  // In a real app, you might want to check an environment variable
  const shouldEnableMocking = true;
  
  // Skip MSW initialization if it's disabled
  if (!shouldEnableMocking) {
    console.info('API mocking is disabled.');
    return;
  }
  
  console.info('API mocking is enabled.');
  
  try {
    // Use the setupMsw helper to initialize MSW
    const { setupMsw } = await import('./lib/setupMsw');
    return await setupMsw();
  } catch (error) {
    console.error('Error starting MSW:', error);
    return false;
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
