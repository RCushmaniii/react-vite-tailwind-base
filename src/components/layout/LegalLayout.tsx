// File: src/components/layout/LegalLayout.tsx
import type { ReactNode } from 'react';
interface LegalLayoutProps {
  children: ReactNode;
  title: string;
  lastUpdated?: string;
}
/**
 * Layout component for legal pages like Privacy Policy and Terms of Service
 * Follows SoC by handling only the layout structure
 */
export function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
  // Define the cobalt blue color for use in styles
  const cobaltBlue = '#0047ab';
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 pb-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold mb-2" style={{ color: cobaltBlue }}>{title}</h1>
          {lastUpdated && (
            <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
          )}
        </header>
        
        <div className="space-y-6">
          {children}
        </div>
        
        <footer className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
          <p>
            If you have any questions about these {title.toLowerCase()}, please contact us.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default LegalLayout;
