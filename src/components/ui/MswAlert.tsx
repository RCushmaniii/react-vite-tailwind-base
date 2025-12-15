// File: src/components/ui/MswAlert.tsx
import { useState } from 'react';

export function MswAlert() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className="rounded-md border overflow-hidden bg-card border-border">
      {/* Demo label */}
      <div className="bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
        DEMO ALERT
      </div>
      
      {/* Main alert content - clickable */}
      <div 
        className="p-4 cursor-pointer"
        onClick={toggleExpand}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-5 w-5 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-foreground">
                Mock Alert: API Connection Error
              </h3>
              <div className="mt-1 text-sm text-muted-foreground">
                <p>Mock Service Worker is not active. API may not be connecting due to server outage.</p>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 ml-2">
            <div 
              className="inline-flex items-center justify-center h-5 w-5 text-muted-foreground"
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 transition-transform duration-200" 
                style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Expandable details section */}
      {isExpanded && (
        <div className="px-4 py-3 bg-muted border-t border-border">
          <div className="text-sm text-foreground">
            <h4 className="font-medium mb-2">Outage Details:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>This is a simulated server outage for demonstration purposes</li>
              <li>In a real application, this alert would show actual error details</li>
              <li>To enable API mocking, set <code className="bg-background px-1 py-0.5 rounded border border-border">VITE_ENABLE_MSW=true</code> in your .env file</li>
              <li>This component demonstrates an interactive, expandable alert pattern</li>
            </ul>
            <div className="mt-3 flex justify-end">
              <button 
                className="px-3 py-1 bg-background hover:bg-card text-foreground rounded-md text-xs font-medium transition-colors border border-border"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MswAlert;
